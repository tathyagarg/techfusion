import os
from dotenv import load_dotenv
import mysql.connector
from fastapi import APIRouter, status
import random
import time
from fastapi import Body
from pydantic import BaseModel
from typing import Annotated
import json

load_dotenv(override=True)

router = APIRouter(prefix="/challenge", tags=["challenges"])

DB_CONFIG: dict[str, str] = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "database": os.getenv("DB_DATABASE"),
    "password": os.getenv("DB_PASSWORD"),
    "port": os.getenv("DB_PORT"),
}

ADMIN = os.getenv("ADMIN")

CHALLENGE_1 = os.getenv("CHALLENGE_1")
CHALLENGE_2 = os.getenv("CHALLENGE_2")
CHALLENGE_3 = os.getenv("CHALLENGE_3")
CHALLENGE_4 = os.getenv("CHALLENGE_4")
CHALLENGE_5 = os.getenv("CHALLENGE_5")

CHALLENGES = [CHALLENGE_1, CHALLENGE_2, CHALLENGE_3, CHALLENGE_4, CHALLENGE_5]

LINK_2 = os.getenv("LINK_2")
LINK_3 = os.getenv("LINK_3")
LINK_4 = os.getenv("LINK_4")
LINK_5 = os.getenv("LINK_5")

LINKS = [LINK_2, LINK_3, LINK_4, LINK_5]


@router.get("/create-tables", status_code=status.HTTP_200_OK)
def create_tables(password: str):
    if password != ADMIN:
        return {"status": 401, "data": {}}

    with mysql.connector.connect(**DB_CONFIG) as db:
        with db.cursor(buffered=True) as cursor:
            cursor.execute(
                """CREATE TABLE IF NOT EXISTS participants (
                    id INT AUTO_INCREMENT,
                    name VARCHAR(255) NOT NULL,
                    user_id INT NOT NULL,
                    challenge_1 TIMESTAMP DEFAULT NULL,
                    challenge_2 TIMESTAMP DEFAULT NULL,
                    challenge_3 TIMESTAMP DEFAULT NULL,
                    challenge_4 TIMESTAMP DEFAULT NULL,
                    challenge_5 TIMESTAMP DEFAULT NULL,
                    PRIMARY KEY (id)
                )"""
            )

        db.commit()


@router.get("/get-participant")
def get_participant(password: str, user_id: int):
    if password != ADMIN:
        return

    with mysql.connector.connect(**DB_CONFIG) as db:
        with db.cursor(buffered=True) as cursor:
            cursor.execute(
                """SELECT * FROM participants WHERE user_id = %s""", (user_id,)
            )

            data = cursor.fetchone()

    return data


@router.post("/add-participant")
def add_participant(name: Annotated[str, Body()]):
    name = json.loads(name)["name"]

    user_id = random.randint(1, 1_000_000)
    with mysql.connector.connect(**DB_CONFIG) as db:
        with db.cursor(buffered=True) as cursor:
            cursor.execute(
                """INSERT INTO participants (
                    name, user_id
                ) VALUES(%s, %s)""",
                (name, user_id),
            )

        db.commit()

    return user_id


class ResBlock(BaseModel):
    user_id: str
    flag: str


@router.post("/process-submission")
def process_submission(res: Annotated[str, Body(...)]):
    res = json.loads(res)
    user_id, flag = res["user_id"], res["flag"]
    with mysql.connector.connect(**DB_CONFIG) as db:
        with db.cursor(buffered=True) as cursor:
            cursor.execute(
                """SELECT challenge_1, challenge_2, challenge_3, challenge_4, challenge_5 FROM participants WHERE user_id = %s""",
                (user_id,),
            )
            challenges = cursor.fetchone()
            unsolved = -1
            for i, challenge in enumerate(challenges):
                if not challenge:
                    unsolved = i
                    break

            solution = CHALLENGES[unsolved]

            if solution == flag:
                cursor.execute(
                    f"""UPDATE participants
                    SET challenge_{unsolved + 1} = '{time.strftime(r"%Y-%m-%d %H:%M:%S", time.localtime(time.time()))}'
                    WHERE user_id = {user_id}"""
                )

                db.commit()

                return LINKS[unsolved]

    return False
