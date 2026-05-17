'use client';

import { useState } from 'react';
import ChatBot from '../components/ChatBot';
import CalendlyModal from '../components/CalendlyModal';

export default function Home() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-block bg-blue-600/20 text-blue-400 text-sm px-3 py-1 rounded-full mb-6">
          Open to Work — Cloud, DevOps, Data Engineering
        </div>

        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Somesh Kumar
        </h1>

        <h2 className="text-2xl text-gray-400 mb-6">
          Data Analyst · Data Engineer · Cloud Engineer
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
          M.S. Computer Science @ Texas A&amp;M University–Kingsville. I build scalable cloud systems,
          automate data pipelines, and turn complex workloads into efficient production solutions.
          AWS SAA + GCP ACE certified.
        </p>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://somesh1312.github.io/somesh.github.io/docs/Somesh-Cloud.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Download Resume
          </a>

          <button
            onClick={() => setCalendlyOpen(true)}
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Book a Call
          </button>

          <a
            href="https://linkedin.com/in/somesh-kumar-51b5521a5"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/somesh1312"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            GitHub
          </a>

        </div>
      </section>

      {/* Chat CTA */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-blue-600/10 border border-blue-600/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">💬</div>

          <h3 className="text-xl font-semibold mb-2">
            Ask Anything About Me
          </h3>

          <p className="text-gray-400 mb-4">
            My AI assistant knows my entire background — skills, projects,
            certifications, and can even book a call with me.
          </p>

          <p className="text-blue-400 text-sm">
            Click the 💬 button in the bottom-right corner to start chatting
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">
          Skills &amp; Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              title: 'Cloud Engineering',
              icon: '☁️',
              skills: [
                'AWS (EC2, S3, Lambda, VPC, IAM)',
                'GCP (BigQuery, Compute Engine)',
                'Terraform (IaC)',
                'Docker · Kubernetes',
                'CI/CD with GitHub Actions'
              ]
            },
            {
              title: 'Data Engineering',
              icon: '🔧',
              skills: [
                'ETL/ELT Pipelines (PySpark, Airflow)',
                'Snowflake · Redshift · MySQL',
                'Python · SQL',
                'API Ingestion & Data Quality',
                'Apache Airflow Orchestration'
              ]
            },
            {
              title: 'Data Analytics',
              icon: '📊',
              skills: [
                'Python (Pandas, NumPy, Matplotlib)',
                'Statistical Modeling',
                'Fraud Detection & Credit Risk',
                'Geospatial Analysis (QGIS)',
                'Financial & Business Analytics'
              ]
            },
            {
              title: 'BI & Reporting',
              icon: '📈',
              skills: [
                'Power BI (DAX, dashboards)',
                'IBM Cognos',
                'Looker Studio',
                'SQL-Driven Reporting',
                'Executive-Ready Visualizations'
              ]
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="text-2xl mb-2">
                {cat.icon}
              </div>

              <h3 className="font-semibold text-lg mb-4">
                {cat.title}
              </h3>

              <ul className="space-y-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-0.5">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto px-6 py-8">

        <h2 className="text-2xl font-bold mb-6">
          Certifications
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            {
              name: 'AWS Solutions Architect – Associate',
              badge: '🟡'
            },
            {
              name: 'Google Cloud – Associate Cloud Engineer',
              badge: '🔵'
            },
            {
              name: 'Cisco Data Science',
              badge: '🟢'
            },
          ].map((c) => (
            <div
              key={c.name}
              className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <span className="text-xl">
                {c.badge}
              </span>

              <span className="text-sm font-medium text-gray-200">
                {c.name}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-8">
          Experience
        </h2>

        <div className="space-y-6">

          {[
            {
              role: 'Graduate Research Engineer',
              company: 'Texas A&M University–Kingsville',
              period: 'June 2024 – Dec 2025',
              points: [
                'Led banking deserts geospatial study using QGIS and U.S. Census data',
                'Completed thesis on reducing cold start latency using AWS Lambda + Redis',
                'Coordinated Banking & Business Career Expo logistics and scheduling',
              ]
            },
            {
              role: 'Business Analytics & Corporate Systems Intern',
              company: 'Bay Ltd.',
              period: 'June 2025 – August 2025',
              points: [
                'Built Power BI and IBM Cognos enterprise reporting solutions',
                'Automated reporting workflows reducing manual operational overhead',
                'Performed cross-system reconciliation for financial and operational data',
              ]
            },
            {
              role: 'Cloud Data Engineer',
              company: 'Bootstrap Sports Retail India',
              period: 'June 2023 – May 2024',
              points: [
                'Built ETL pipelines using Python, PySpark, SQL, and Airflow',
                'Designed Snowflake and MySQL schemas for analytics workloads',
                'Developed Power BI dashboards for athlete performance tracking',
              ]
            },
            {
              role: 'Data Analyst',
              company: 'Prime Connexar',
              period: 'June 2022 – May 2023',
              points: [
                'Improved data quality using Python and SQL transformation workflows',
                'Built predictive models improving customer retention performance',
                'Created KPI dashboards increasing analytics adoption across teams',
              ]
            },
          ].map((job) => (
            <div
              key={job.role}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >

              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">

                <div>
                  <h3 className="font-semibold text-lg">
                    {job.role}
                  </h3>

                  <p className="text-blue-400 text-sm">
                    {job.company}
                  </p>
                </div>

                <span className="text-gray-500 text-sm">
                  {job.period}
                </span>

              </div>

              <ul className="space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-0.5">▸</span>
                    {p}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-800 mt-8 text-center text-gray-500 text-sm">
        somesh1st@gmail.com · Texas, USA · github.com/somesh1312
      </footer>

      {/* Chatbot + Calendly */}
      <ChatBot onCalendlyOpen={() => setCalendlyOpen(true)} />

      <CalendlyModal
        open={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />

    </main>
  );
}