## ADDED Requirements

### Requirement: Hero slider
The home page SHALL display a hero section with rotating featured content.

#### Scenario: Hero loads
- **WHEN** user navigates to /
- **THEN** the system SHALL display a hero banner with the club logo, club name "Brawl Stars FC", and a call-to-action button

#### Scenario: Featured content rotation
- **WHEN** user is on the home page
- **THEN** the hero SHALL cycle through featured items: next match, latest news, squad spotlight

### Requirement: Squad preview section
The home page SHALL display a preview of featured brawlers.

#### Scenario: Squad preview renders
- **WHEN** user scrolls past the hero on /
- **THEN** the system SHALL display a horizontal scrollable row of 6-8 featured brawler cards

### Requirement: Sponsors section
The home page SHALL display sponsor logos in the footer area.

#### Scenario: Sponsors visible
- **WHEN** user scrolls to the footer area on any page
- **THEN** the system SHALL display sponsor logos (Starr Park, 8-Bit Arcade, etc.) in a horizontal row
