## ADDED Requirements

### Requirement: Club history page
The system SHALL display the history of Starr Park and Brawl Stars FC.

#### Scenario: View club page
- **WHEN** user navigates to /club
- **THEN** the system SHALL display a narrative history section about Starr Park and the founding of Brawl Stars FC

### Requirement: Trophy cabinet
The system SHALL display a trophy/palmarés section showing trophies won per game mode.

#### Scenario: Trophy display
- **WHEN** user scrolls to the trophies section on /club
- **THEN** the system SHALL display a grid of trophies with mode name, number of wins, and year of last win

#### Scenario: Trophy icons
- **WHEN** trophies section renders
- **THEN** each trophy SHALL have an icon/emoji representing the game mode
