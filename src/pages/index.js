import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const learningPaths = [
  { title: "Dataverse", link: "/docs/category/dataverse" },
  { title: "Model-Driven Apps", link: "/docs/category/model-driven-apps" },
  { title: "Canvas Apps", link: "/docs/category/canvas-apps" },
  { title: "Power Automate", link: "/docs/category/power-automate" },
  { title: "Security", link: "/docs/category/security" },
  {
    title: "JavaScript / TypeScript",
    link: "/docs/category/javascript--typescript",
  },
  { title: "C# / .NET", link: "/docs/category/c--net" },
  { title: "Dataverse Plugins", link: "/docs/category/dataverse-plugins" },
  {
    title: "Custom APIs / Web API",
    link: "/docs/category/custom-apis--web-api",
  },
  { title: "PCF", link: "/docs/category/pcf" },
  { title: "Azure", link: "/docs/category/azure" },
  {
    title: "ALM / Azure DevOps",
    link: "/docs/category/alm--azure-devops",
  },
  { title: "Power Pages", link: "/docs/category/power-pages" },
  { title: "Copilot Studio", link: "/docs/category/copilot-studio" },
  { title: "Microsoft Foundry", link: "/docs/category/microsoft-foundry" },
  {
    title: "Azure AI Search / RAG / MCP",
    link: "/docs/category/azure-ai-search--rag--mcp",
  },
  {
    title: "Architecture & Governance",
    link: "/docs/category/architecture--governance",
  },
];

export default function Home() {
  return (
    <Layout
      title="Power Platform Engineering Academy"
      description="Learn Power Platform from fundamentals to enterprise engineering."
    >
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <section
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
          >
            Power Platform Engineering Academy
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "760px",
              margin: "0 auto 2rem",
              lineHeight: "1.7",
            }}
          >
            A structured learning platform for Power Platform development,
            pro-code engineering, Azure integration, ALM, and enterprise AI.
          </p>

          <Link
            className="button button--primary button--lg"
            to="/docs/start-here"
          >
            Start Learning
          </Link>
        </section>

        <section>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Learning Paths
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {learningPaths.map((path) => (
              <Link
                key={path.title}
                to={path.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid var(--ifm-color-emphasis-300)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  background: "var(--ifm-background-surface-color)",
                  display: "block",
                }}
              >
                <h3
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {path.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
