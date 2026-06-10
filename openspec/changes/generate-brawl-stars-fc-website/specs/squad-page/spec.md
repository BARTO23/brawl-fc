## ADDED Requirements

### Requirement: Squad grid with filters
The system SHALL display a responsive grid of all brawlers with filter controls for rarity and role.

#### Scenario: View all brawlers
- **WHEN** user navigates to /squad
- **THEN** the system SHALL display a grid with all 93 brawlers as cards

#### Scenario: Filter by rarity
- **WHEN** user selects a rarity filter (e.g., "Legendario")
- **THEN** the system SHALL show only brawlers matching that rarity

#### Scenario: Filter by role
- **WHEN** user selects a role filter (e.g., "Tank")
- **THEN** the system SHALL show only brawlers matching that role

#### Scenario: Combined filters
- **WHEN** user selects both rarity and role filters
- **THEN** the system SHALL show only brawlers matching both criteria

### Requirement: Brawler card display
Each brawler card SHALL show the portrait image, name, rarity indicator, and role badge.

#### Scenario: Card renders correctly
- **WHEN** the squad page loads
- **THEN** each card SHALL display the brawler's portrait image, name, rarity-colored border, and role label

#### Scenario: Click navigates to profile
- **WHEN** user clicks a brawler card
- **THEN** the system SHALL navigate to /squad/:slug

### Requirement: Individual brawler profile
The system SHALL generate a dedicated page for each brawler at /squad/:slug with full details.

#### Scenario: View brawler profile
- **WHEN** user navigates to /squad/shelly
- **THEN** the system SHALL display the brawler's name, portrait, rarity, role, stats (speed/attack/defense), and biography

#### Scenario: Invalid slug
- **WHEN** user navigates to /squad/nonexistent
- **THEN** the system SHALL display a 404 page

### Requirement: Rarity color coding
Each rarity level SHALL have a distinct visual color applied to card borders and badges.

#### Scenario: Rarity colors render
- **WHEN** the squad page displays brawlers
- **THEN** Common SHALL be gray, Super green, Hiper blue, Épico purple, Mítico red, Legendario gold, Cromático cyan
