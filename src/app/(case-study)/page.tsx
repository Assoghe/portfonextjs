// 'use client'
// import { portfolioData } from '../constants/constants';
// import { PortfoType } from '../types/portfo';
// import CaseStudyTest from './[case-study]/page';
// import { useEffect, useState } from 'react';

// export function CaseStudyPage({ projectName }: { projectName: string }) {
//   const [caseData, setCaseData] = useState<PortfoType | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       const data = getPortfolioData(projectName);
//       console.log(data, "hello")
//     }

//     fetchData();
//   }, [projectName]);

//   return caseData ? <CaseStudyTest data={caseData} /> : <div>Chargement...</div>;
// }

// export function getPortfolioData(projectName: string) {
//   console.log("projectName", projectName);
//   const data = portfolioData.find((portfolio) => portfolio.name === projectName)?.case;
//   console.log("data", data);
//   return data || null;
// }

// export default CaseStudyPage;
