## ADDED Requirements

### Requirement: Club League standings table
The system SHALL display a Club League standings table with all teams and their statistics.

#### Scenario: View standings page
- **WHEN** user navigates to /standings
- **THEN** the system SHALL display a table with columns: Pos, Team, PJ, PG, PE, PP, Pts

#### Scenario: Standings sorting
- **WHEN** the standings page loads
- **THEN** teams SHALL be sorted by points descending, then goal difference

### Requirement: Team entries in standings
Each team entry SHALL show club name, played matches, wins, draws, losses, and points.

#### Scenario: Row renders correctly
- **WHEN** standings table renders
- **THEN** each row SHALL display team position number, team name/city, PJ (played), PG (wins), PE (draws), PP (losses), Pts (points)

#### Scenario: Highlight Brawl Stars FC
- **WHEN** standings page loads
- **THEN** the Brawl Stars FC row SHALL be visually highlighted with a distinct background color
