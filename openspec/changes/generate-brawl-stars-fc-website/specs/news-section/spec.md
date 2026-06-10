## ADDED Requirements

### Requirement: News article list
The system SHALL display a list of news articles about Brawl Stars FC.

#### Scenario: View news list
- **WHEN** user navigates to /news
- **THEN** the system SHALL display a list of article cards with title, date, excerpt, and category badge

#### Scenario: Articles sorted by date
- **WHEN** the news list loads
- **THEN** articles SHALL be sorted newest to oldest

### Requirement: Individual article page
Each news article SHALL have a dedicated page at /news/:slug with full content.

#### Scenario: View full article
- **WHEN** user clicks an article card or navigates to /news/:slug
- **THEN** the system SHALL display the full article with title, date, category, body content, and related image

#### Scenario: Invalid article slug
- **WHEN** user navigates to /news/nonexistent
- **THEN** the system SHALL display a 404 page

### Requirement: Article categories
Article cards and pages SHALL display a category badge.

#### Scenario: Category badges render
- **WHEN** news list displays articles
- **THEN** each card SHALL show a category badge (e.g., "Fichaje", "Balance", "Temporada", "Evento")
