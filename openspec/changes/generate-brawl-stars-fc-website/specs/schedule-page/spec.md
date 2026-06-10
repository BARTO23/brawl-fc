## ADDED Requirements

### Requirement: Schedule calendar
The system SHALL display a calendar of upcoming game mode rotations as match fixtures.

#### Scenario: View schedule page
- **WHEN** user navigates to /schedule
- **THEN** the system SHALL display a list of upcoming game mode rotations with date, mode name, and map

#### Scenario: Multiple fixtures visible
- **WHEN** the schedule page loads
- **THEN** the system SHALL show at least 5 upcoming fixtures

### Requirement: Mode to competition mapping
Each game mode SHALL be displayed as a competition type with an icon/badge.

#### Scenario: Mode badges render
- **WHEN** schedule page displays fixtures
- **THEN** each fixture SHALL show a badge with the mode name and icon: Gem Grab, Bounty, Heist, Brawl Ball, Knockout, Hot Zone, Solo Showdown, Duo Showdown, Wipeout, Volley Brawl

### Requirement: Past fixture results
The system SHALL display recent past fixtures with results.

#### Scenario: Past results visible
- **WHEN** user scrolls past upcoming fixtures on /schedule
- **THEN** the system SHALL show past fixtures with W/D/L results
