import discord, logging, json
from discord.ext import commands
# Requirements: discord.py, tinydb, profanity

# Define all variables to be used around the script
description = '''Bot description here'''
bot = commands.Bot(command_prefix='~', description=description)

# Print the starting text
print('---------------')
print('Sample Bot')
print('---------------')
print('Starting Bot...')

# Setup basic logging for the bot
logging.basicConfig(level=logging.WARNING)

@bot.event
async def on_ready():
    print('Bot is ready for use')

if __name__ == '__main__':
	bot.run('MzMxMDE5MzQ5ODQ0Mjk1Njgx.DDprXg.Oys-a5-gjTkpGcmklifi3XIOdl8')