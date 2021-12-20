import math
from django.db import models
from datetime import datetime, timedelta


class SkillYearsExperienceField(models.DateField):
    description = "A field that keeps track of years of experience in a skill"

    def __init__(self, default: int = None):
        if isinstance(default, int) or default is None:
            self.default = default
        else:
            raise TypeError("Default should be days deducted from today as integer")

    def get_years_experience(self, date):
        try:
            if date is None:
                if self.default:
                    return datetime.today() - timedelta(days=self.default)
                return None
            elif isinstance(date, datetime):
                return datetime.today() - date
            elif isinstance(date, str):
                try:
                    return datetime.today() - datetime.strptime(date, "%d-%m-%Y")
                except ValueError:
                    print("Detected incorrectly formatted date, should be: %d-%m-%Y")
        except TypeError:
            print(
                f"Wrong type, expected: {repr(datetime)} | {repr(str)} | {repr(None)}"
            )
            raise

    def days_to_years(self, timedelta):
        return math.ceil(timedelta.days / 365)
