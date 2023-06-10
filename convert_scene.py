import json
def write_card(card, f):
    print('       {', file = f)
    print('           card: {', file = f)
    for key, value in card.items():
        value_string = f'"{value}"' if type(value) == str else value
        print(f'              {key}: {value_string},', file = f)
    print('           }', file = f)
    print('        },', file = f)

with open('world.vrse') as f:
    world = json.load(f)

with open('cards.js', 'w') as f:
    for card in world['data']['cards']:
        write_card(card['card'], f)