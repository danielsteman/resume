from time import sleep
from emoji import emojize

interval = 3

sleep(1)

text = [
    "hi there :raised_hand:",
    "instead of making a resume i wanted to make something fun :wrench:",
    "so I drew a little something in sketch",
    "and made it real with django and react",
    "have a look at what i did and do",
    "and let me know if i can build something for you 😄"
]

for t in text:
    print(emojize(t))
    sleep(interval)