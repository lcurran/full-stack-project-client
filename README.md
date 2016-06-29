#BOOK OF HOLDING (*working title)

A tabletop RPG companion app with a dice roller and a character sheet log.

Live app link: https://lcurran.github.io/full-stack-project-client/
API repo link: https://github.com/lcurran/full-stack-project-api

The app is still very much incomplete, but the communication between client and
API is sound.  The client needs a massive UI/UX update to add error/success handling,
usability, and a more responsive &amp; user friendly design.  There are also a
lot of features I still want too add, such as the ability to search the database
for spells, add the ability to store/search equipment and other attributes,
feats, etc.

##PROJECT 2 SCOPE

##IDEA

Book of Holding: A Dungeons and Dragons 5e companion application with a dice
roller, and a character sheet log.

###Dice Roller

Dice offered:

*   4-sided die (d4)
*   6-sided die (d6)
*   8-sided die (d8)
*   10-sided die (d10)
*   12-sided die (d12)
*   20-sided die (d20)
*   Percentile 10-sided die (d10 showing 00/10/20/30, etc)

Special cheat mode: enter konami code to set D20 to always roll crits.

Log to record rolls

###Character sheet
Can only be accessed when you are logged in.

Displays all your current saved characters name, race, class, level, as well as
options to view, edit, or delete each one.

Displays New page option to create a new character sheet.

Character sheet follows D&amp;D 5e, listing of all fields can be found in
character_sheet_fields.md

    *   maybe add weapon field/stats?

Character sheet has a view only state, which has an edit button in the corner
for easy updating of sheet.

Include back button or tab to navigate back to the character listing.

Auto prompt if user attempts to navigate away from edit page, ask do they want
to save changes?

##UI

Mobile compatible

##2.0 and Beyond Functionality

*   Add auto calculation for saving throws, modifiers, attacks, etc.
*   Add seed data to offer selection of traits/feats as opposed to manual entry
*   Add battle mode stat tracker
*   Add support for other tabletop systems/customizable character sheet
*   Animate dice roller
*   Port to mobile app?
