# Checking API Status

| Title: | Checking API status (i) |
| :---- | :---- |
| Narrative: |  |
| As a developer developing products with the API I want to be able to check the status of the API programmatically So that I am able to send requests at an appropriate time |  |
| Acceptance Criteria: |  |
| API should be able to accept a HTTP GET request and respond with a status message indicating readiness of the API. |  |

| Title: | Checking API status (ii) \- ChatGPT |
| :---- | :---- |
| Narrative: |  |
| As a commuter I want to see if the bus trip API is up So that I can tell if the service is currently available |  |
| Acceptance Criteria: |  |
| API should respond to a request by the user to check the API status with a status code indicating if the API is ready or not. |  |
| Assumptions: |  |
|  |  |

# 

# Bus Trip Analytics

| Title: | Bus Trip Analytics |
| :---- | :---- |
| Narrative: |  |
| As a data analyst I want to to be able to retrieve trip data (such as timestamp and location data) So that I can compute and analyze relevant trip statistics. |  |
| Acceptance Criteria: |  |
| Response from API should be easily parseable and contain timestamp information per location. |  |

| Title: | Bus Trip Analytics (i) \- Feature Step (1) |
| :---- | :---- |
| Narrative: |  |
| As a data analyst I want to be able to retrieve trip data by bus line (such as timestamp and location data) So that I can compute statistics such as average/max/min trip time per bus line |  |
| Acceptance Criteria: |  |
| API should accept the bus line for which to retrieve trip data Response from API should provide timestamped trip data for only the requested bus line Response from API should include all buses servicing the requested bus line |  |

| Title: | Bus Trip Analytics (ii) \- Feature Step (2) |
| :---- | :---- |
| Narrative: |  |
| As a data analyst I want to be able to retrieve trip data for each bus number (such as timestamp and location data) So that I can compute statistics (e.g. total mileage, average trip time etc) for each bus and identify problematic buses |  |
| Acceptance Criteria: |  |
| API should accept the bus number for which to retrieve trip data for Response from API should include timestamped trip data for only the queried bus number Response from API should include all trips for the queried bus number |  |

| Title: | Bus Trip Analytics (iii) \- ChatGPT |
| :---- | :---- |
| Narrative: |  |
| As an operations manager, I want to retrieve bus trip data for specific public lines, So that I can oversee service efficiency and optimize routes. |  |
| Acceptance Criteria: |  |
| API should accept the bus line for which to retrieve trip data Response from API should provide timestamped trip data for only the requested bus line Response from API should include all buses servicing the requested bus line |  |

# Trip Planning

| Title: | Trip Planning (i) |
| :---- | :---- |
| Narrative: |  |
| As a commuter I want to view the path taken by the average bus for a given bus line So that I can plan out my commute |  |
| Acceptance Criteria: |  |
| Application should provide a single, updated bus route plotted on a map for the user’s perusal Bus route provided should correspond to only the queried bus line An error should be thrown if the queried bus line does not exist |  |
| Assumptions: |  |
| Paths taken by buses servicing a given bus line are relatively fixed and do not change often (in terms of pathing) User story is written for a theoretical application utilizing the NY Bus API API is up to date e.g. path taken by the latest bus is also the most updated route for the given bus line |  |

| Title: | Trip Planning (ii) \- ChatGPT |
| :---- | :---- |
| Narrative: |  |
| As a developer I want to retrieve bus trip information for a specific public line name So that I can display the trips associated with that line |  |
| Acceptance Criteria: |  |
| API should provide a response containing detailed trip information for all buses that serviced the queried bus line. Response provided by the API should only correspond to the queried bus line. API should provide an error if the queried bus line does not exist |  |
| Assumptions: |  |
|  |  |

| Title: | Trip Planning (iii) |
| :---- | :---- |
| Narrative: |  |
| As a commuter I want to retrieve all available bus lines that I can take So that I can plan out my commute |  |
| Acceptance Criteria: |  |
| API should provide a response containing all bus lines that are available for use |  |
| Assumptions: |  |
| All bus lines provided by the API are for public use (i.e. does not list internal shuttle services for crew etc.) API is up to date i.e. all bus lines provided by the API exist and are available for use. |  |

# 

# Fleet/Line Management

| Title: | View Fleet |
| :---- | :---- |
| Narrative: |  |
| As a dispatcher, I want to be able to get a list of all buses and their reference numbers, So that I can track my fleet strength effectively |  |
| Acceptance Criteria: |  |
| API should provide a response containing all buses currently in the fleet |  |
| Assumptions: |  |
| The API is up to date and only contains buses that are available for public use |  |

| Title: | View Lines \- ChatGPT |
| :---- | :---- |
| Narrative: |  |
| As a dispatcher, I want to be able to get a list of all lines, So that I can dispatch my fleet effectively |  |
| Acceptance Criteria: |  |
| API should provide a response containing all lines currently available for servicing |  |
| Assumptions: |  |
| All bus lines provided by the API are for public use (i.e. does not list internal shuttle services for crew etc.) API is up to date i.e. all bus lines provided by the API exist and are available for use. |  |

# 

# ChatGPT Input

“Suppose I have an API for New York bus trips with the following endpoints.

1) /ready: checks if the server is ready  
2) /getVehRef: Gets a list of vehicle numbers  
3) /getPubLineName: Gets a list of all bus line names  
4) /getBusTripByVehRef/\<Vehicle Ref Number\>: Gets a list of all bus trips for the provided vehicle number  
5) /getBusTripByPubLineName/\<Line Name\>: Ges a list of all bus trips for the given line name

Write me user stories from various perspectives for this API”