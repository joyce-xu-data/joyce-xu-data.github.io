import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';

const Resume = () => {
    const professionalExperience = [
        {
          role: 'Intern',
          company: 'MVP Studio',
          dateRange: 'Jun 2023 - Present',
          responsibilities: [
            {
              title: 'Onboarding Project',
              descriptions: [
                '.NET MVC, HTML/CSS, APIs, Cloud Azure',
                'Building with Entity Framework',
                'Work with APIs to connect database on SQL Server Management Studio',
              ],
            },
            {
              title: 'Project Talent',
              descriptions: [
                'Refactored Class Components to Functional Components for Talent Match Project',
                'Contributed to knowledge sharing by actively sharing learnings on Company’s platforms',
                'Updated Docker Settings for .Net2.0 to .Net6.0 for project to resolve mac compatibility ',
              ],
            },
          ],
        },
        {
          role: 'Intern',
          company: 'Aimy.io',
          dateRange: 'April 2024 - Present',
          responsibilities: [
            {
              title: 'Feature Enhancement',
              descriptions: [
                '.NET MVC, HTML/CSS, APIs, Cloud Azure, Azure DevOps, Ant Design',
                'Enhanced form validation processes  for General Setting Feature, improving user input accuracy ',
                'Updated code for Locations Page Feature',
              ],
            },
          ],
        },
        {
          role: 'Assistant Director (Governance)',
          company: 'People’s Association',
          dateRange: 'Mar 2021 - Present',
          responsibilities: [
            {
              title: 'Compliance and Process Optimization',
              descriptions: [
                'Ensure compliance oversight across finance and procurement for 35 grassroots organisations, streamlining processes through the development of SOPs and internal controls, enhancing the accountability and efficiency of financial operations.',
              ],
            },
            {
                title: 'Financial Analysis and Reporting',
                descriptions: [
                  'Conducted meticulous analysis of monthly financial reports, identifying and resolving discrepancies promptly. Successfully assisted the finance digital transformation for 3 divisions, achieving over 80% electronic transactions across the grassroots organisations under the 3 divisions.'
                ],
              },
              {
                title: 'Audit Coordination',
                descriptions: [
                  'improved compliance across divisions achieving a record of no major audit findings.'
                ],
              },
              {
                title: 'Community of Practice Leadership',
                descriptions: [
                  'Initiated a district wide platform to exchange best practices and insights on finance, compliance, and procurement, fostering a culture of knowledge sharing and continuous improvement. Initiated and curated a weekly finance newsletter targeted at approximately 60 staff members across three divisions, designed to address frequent questions on procurement and compliance through easy-to-understand infographics. This innovative approach not only facilitated learning but also significantly enhanced staff engagement with finance protocols. The newsletter’s success was evident in its positive reception among staff, leading to its adoption across the North East District 19 divisions, thereby standardizing knowledge sharing and fostering a culture of transparency and efficiency in financial operations.'
                ],
              },
            {
              title: 'Staff Development and Training',
              descriptions: [
                'Launched a comprehensive training roadmap for the divisions to pinpoint and address staff skill gaps through focused surveys and discussions, implementing targeted training workshops that bolstered organizational capability. Able to break down complex financial, procurement, and compliance guidelines into understandable steps for staff, enhancing their comprehension and execution of these critical processes. Led targeted training initiatives to ensure clarity, compliance , leading to improved operational efficiency and adherence to guidelines. Introduced a gamified approach to monthly finance sessions, making them more interactive and engaging for staff. This method has received positive feedback for enhancing understanding and interest in finance. Have ensured to explain the "why" behind financial SOPs, helping staff grasp their significance and encouraging informed compliance.'
              ],
            },
            {
                title: 'Data Analysis and Collaboration Initiative: ',
                descriptions: [
                  'Led my team to become finalists in the Data Tournament hosted by the Ministry of Culture, Community and Youth, endorsing innovative data strategies. Championed the team to  promote efficient remote collaboration via Microsoft Teams, significantly boosting work productivity.'
                ],
              }
          ],
        },
        {
            role: 'Assistant Director (Engagement)',
            company: 'People’s Association',
            dateRange: '2019-2021',
            responsibilities: [
              {
                title: 'Strategy Development',
                descriptions: [
                  'Aided in crafting and executing outreach and engagement strategies, leveraging evidence-based decision-making to ensure impactful communications with residents. Improved volunteer engagement to hard to reach residents'
                ],
              },
              {
                title: 'Data Analysis and Reporting',
                descriptions: [
                  'Analyzed weekly sentiment reports, synthesizing data to support Ministries and government agencies in the development, refinement, and adjustment of national policies, directly addressing public concerns and enhancing municipal solutions.',
                ],
              },
              {
                title: 'Crisis Management and Coordination',
                descriptions: [
                  'Played a pivotal role in the coordination of pandemic outreach initiatives across 5 divisions during the Covid-19 outbreak, ensuring effective communication and community support in unprecedented times.',
                ],
              }
            ],
          },
          {
            role: 'Deputy Constituency Director',
            company: 'People’s Association',
            dateRange: '2016-2019',
            responsibilities: [
              {
                title: 'Financial Stewardship',
                descriptions: [
                  'Managed rigorous accounting and cash management processes for all grassroots organisations within the division, ensuring adherence to financial rules and regulations for optimal governance and compliance. Initiated and personally conducted routine spot checks for financial irregularities within the organization, directly leading to my discovery of a significant fraud case. This proactive approach underscored my commitment to upholding financial integrity and safeguarding organizational assets.'
                ],
              },
              {
                title: 'Policy Communication',
                descriptions: [
                  'Articulated government policies to constituents, facilitated engaging discussions, and conveyed community feedback to relevant stakeholders, strengthening the grassroots organisations as a key communication conduit between government and citizens.'
                ],
              },
              {
                title: 'Community Engagement',
                descriptions: [
                  'Directed the planning and execution of community engagement programs, marrying local initiatives with strategic goals to encourage robust community participation.',
                ],
              }
            ],
          },
      ];
    

 
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      {/* Technical Expertise Section */}
      <Paper elevation={3} sx={{ mb: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Technical Expertise
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Languages and Framework</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>JavaScript, React, .NET/MVC, HTML/CSS</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Databases</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>PostgreSQL, MongoDB, SQLServer</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Web Technologies</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>Node.js, RESTful APIs, Material UI, Ant Design</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Tools and Platforms</Typography>
        <Typography variant="body1">Visual Studio , Postman, IntellijIdea, Docker, Microsoft Azure, Azure Devops</Typography>
      </Paper>

       {/* Professional Experience Section */}
       <Paper elevation={3} sx={{ mb: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Professional Experience
        </Typography>
        {professionalExperience.map((experience, index) => (
          <Box key={`${experience.role}-${index}`} sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {experience.role} - {experience.company}
            </Typography>
            <Typography variant="subtitle1">{experience.dateRange}</Typography>
            {experience.responsibilities.map((res, resIndex) => (
              <Box key={`${experience.role}-res-${resIndex}`} sx={{ mt: 1, mb: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2 }}>
                  {res.title}
                </Typography>
                {res.descriptions.map((description, descIndex) => (
                  <Typography key={`${experience.role}-desc-${resIndex}-${descIndex}`} variant="body2" sx={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside', ml: 4 }}>
                    {description}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Paper>
    </Container>
  );
};
export default Resume;
