# Report Analysis and Data Authentication Using Call Handling Architecture

This document outlines the architecture of the report analysis and data authentication system. The system primarily focuses on gathering reports from various stakeholders and leveraging call-based feedback from villagers to ensure data authenticity.

[Presentation/Demo](https://www.canva.com/design/DAF-BCPgnZQ/RwnPiNhXFgL5zRydW-9uOQ/edit?utm_content=DAF-BCPgnZQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Key Features

### Report Analysis

The system collects reports from different stakeholders involved in the project, including pump operators, the Water User Committee (WUC), and the Water Quality Control (WQC) team. These reports provide valuable insights into the functioning and issues related to the water pump system.

### Villagers' Feedback through Calls

To authenticate the collected data, an Integrated Voice Response (IVR) system is implemented. The system makes daily calls to villagers at a fixed time when the water pump is expected to stop running. Villagers respond to a questionnaire by using their keypad, providing feedback on the pump's status and any issues faced. This call-based feedback from villagers helps ensure the accuracy and authenticity of the collected data.

### Data Storage and Management

The collected reports and villagers' feedback are stored and managed using a MongoDB database. The database allows efficient storage, retrieval, and analysis of the data, supporting the reporting and authentication processes.

### Admin Dashboard

The system includes an Admin Dashboard that provides comprehensive access to all the information collected. The Admin can select specific schemes, villages, or analytical metrics to visualize and analyze data related to water availability, breakdown incidents, IVR responses, and water quality. The Admin Dashboard acts as a central hub for data monitoring and decision-making.

## Workflow and Stakeholders

### Pump Operators

Pump operators play a vital role in the system. They provide daily reports on the pump's functioning, including activation time and any issues encountered. The system incorporates a simple check system where operators mark the pump's status, and the timestamps are logged to prevent fraudulent entries.

### Water User Committee (WUC)

The WUC monitors pump operations and receives reports from both pump operators and the WQC team. They can escalate issues to the appropriate entities, such as NGOs or government bodies, and track the resolution progress.

### Water Quality Control (WQC) Team

The WQC team ensures water quality and conducts regular inspections. They submit detailed reports on water purity and any related concerns. These reports enable monitoring for inconsistencies or issues affecting the water's potability.

## Conclusion

The report analysis and data authentication system architecture facilitate the collection, analysis, and authentication of data from multiple stakeholders. By incorporating an IVR system for villagers' feedback and leveraging a MongoDB database for efficient data storage, the system ensures the accuracy and authenticity of the collected information.

The Admin Dashboard provides stakeholders with a comprehensive overview of the system's performance, allowing for informed decision-making and effective issue resolution.

Please note that this document provides a high-level overview of the system architecture. For more detailed information and implementation specifics, please refer to the project's GitHub repository.
