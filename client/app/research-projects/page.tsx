import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, BarChart3, Brain, FileText, LinkIcon, ListChecks, ShieldCheck, Users } from "lucide-react"
import Link from "next/link"
import ResearchProjectTimeline from "@/components/research-project-timeline"

const project = {
  title: "Detecting and Mitigating Gender Bias in AI-Powered Resume Screening Systems",
  subtitle: "Building equitable hiring pipelines with transparent, bias-aware AI",
  status: "In Progress",
  timeline: "August 2025 - October 2025 (Ongoing)",
  introduction:
    "AI-driven recruitment models are increasingly used to rank and shortlist candidates based on their resumes. However, these models may unintentionally learn and amplify gender bias, even when explicit gender indicators are removed through latent linguistic cues, occupational stereotypes, or imbalanced training data.",
  summary:
    "Our research aims to causally measure and mitigate gender bias in resume-ranking systems using an interpretable, data-driven pipeline. By combining embedding analysis, counterfactual generation, and causal inference, we systematically evaluate whether gender-related signals influence model decisions. We then apply adaptive bias-reduction methods that adjust the model's learning process to treat all candidates fairly, without sacrificing accuracy. Through built-in validation and testing, our framework ensures that the hiring model remains transparent, trustworthy, and equitable across genders.",
  abstract:
    "Bias in automated hiring systems often arises from demographic cues embedded within resumes, leading to unfair candidate screening. This research presents a bias-aware resume evaluation pipeline that neutralizes gender and identity indicators while preserving skill-based semantics. The system begins with a custom spaCy-based masking and extraction framework, which anonymizes names, pronouns, and gendered titles, followed by structured data extraction and embedding generation using MiniLM. To mitigate residual bias, an Adversarial Subspace Counterfactual Generation (ASCG) module and Iterative Nullspace Projection (INLP) were employed to remove gender-correlated components from embedding space. The resulting debiased vectors feed into a multi-stage evaluation system integrating ATS-style scoring, counterfactual validation, and causal inference analysis. Comprehensive experiments confirmed high semantic retention (cosine ≈ 0.92) and minimal gender leakage (probe AUC ≈ 0.5). The framework further includes grammar correction, skill-experience quantification, and an interpretable ranking mechanism that transparently explains candidate scores. The final pipeline demonstrates that algorithmic fairness and performance can coexist, enabling responsible AI-driven recruitment systems that emphasize competence over identity.",
  objectives: [
    "Identify latent linguistic and structural gender cues across large-scale resume corpora",
    "Quantify disparate impact in ranking outcomes using counterfactual evaluation",
    "Deploy adaptive debiasing strategies that preserve utility while enforcing fairness"
  ],
  impact:
    "The framework empowers hiring teams to certify that resume-screening assistants remain transparent, trustworthy, and equitable across genders, aligning with global ethical AI guidelines.",
  relatedLinks: [
    {
      label: "Algorithmic Bias in Job Hiring — Gender Policy Report",
      href: "https://genderpolicyreport.umn.edu/algorithmic-bias-in-job-hiring/"
    },
    {
      label: "Measuring Bias in Resume Screening (arXiv 2112.08910)",
      href: "https://arxiv.org/pdf/2112.08910"
    }
  ]
}

const methodology = [
  {
    title: "Representation Audit",
    description:
      "Embedding analysis and clustering to surface latent gender indicators, occupational stereotypes, and lexical proxies that survive explicit gender redaction.",
    icon: Brain
  },
  {
    title: "Counterfactual Testing",
    description:
      "Synthetic resume perturbation plus causal inference to estimate gender sensitivity scores and isolate the drivers of disparate rankings.",
    icon: ShieldCheck
  },
  {
    title: "Adaptive Mitigation",
    description:
      "Re-weighting, adversarial debiasing, and human-in-the-loop calibration to rebalance model learning while tracking accuracy and fairness parity.",
    icon: ListChecks
  }
]

const milestones = [
  {
    label: "Dataset Assembly & Baseline Audit",
    status: "Completed",
    details: "Curated anonymized hiring datasets, benchmarked initial bias metrics, and set reproducibility standards."
  },
  {
    label: "Counterfactual Evaluation Suite",
    status: "In Progress",
    details: "Building automated perturbation scripts and causal attribution dashboards for ranking diagnostics."
  },
  {
    label: "Bias Mitigation Playbooks",
    status: "Scheduled",
    details: "Packaging mitigation recipes with configuration guides, integration hooks, and governance checklists."
  }
]

const deliverables = [
  "Open-source benchmark of gender-neutral resume embeddings annotated with fairness metadata",
  "Interactive audit report template with causal insights and mitigation recommendations",
  "Deployment-ready evaluation harness that plugs into applicant tracking systems"
]

const timeline = [
  {
    title: "Phase 1 — Data Preprocessing & NER Masking",
    description: "Built a custom spaCy pipeline to mask gendered entities (PERSON, PRONOUN, TITLE_GENDERED, ORG_DEMOG). Added heuristics to avoid overmasking project names and created whitelists for technical keywords. Generated masked outputs with minimal semantic loss (cosine similarity ≈ 0.92).",
    period: "Early–Mid Aug 2025",
    status: "completed" as const
  },
  {
    title: "Phase 2 — Resume Extraction & Embedding Generation",
    description: "Automated extraction of names, contact info, skills, education, and experience using pdfplumber + pypdf with OCR fallback. Implemented NER-based section detection and integrated Groq API with LangChain multimodal RAG tests. Applied grammar correction & skill-experience scoring pipeline.",
    period: "Late Aug 2025",
    status: "completed" as const
  },
  {
    title: "Phase 3 — Adversarial Subspace Counterfactual Generation (ASCG) Setup",
    description: "Conceptualized ASCG framework for gender-invariant job-fit prediction. Embedded resumes using SentenceTransformer (all-MiniLM-L6-v2), identified gender direction via synthetic male–female pairs, and trained model with fairness-aware loss: L_total = L_task + αL_cf.",
    period: "Late Aug 2025",
    status: "completed" as const
  },
  {
    title: "Phase 4 — Structured Feature Extraction",
    description: "Extracted title, company, duration, and skill data from experience sections. Added POS-based and frequency-based skill vectors. Generated structured datasets with confounders (education, skills, experience) to enhance interpretability and prepare for causal modeling.",
    period: "Early Sep 2025",
    status: "completed" as const
  },
  {
    title: "Phase 5 — Debiasing & Model Refinement",
    description: "Combined Hard Debias + Counterfactual PCA to remove gender-correlated components while preserving skill semantics. Learned gender direction via logistic regression probes and applied projection-based debiasing: E_debiased = E - (E·g)g. Validated fairness via probe AUC ≈ 0.5.",
    period: "Mid–Late Sep 2025",
    status: "completed" as const
  },
  {
    title: "Phase 6 — Multi-Stage Debiasing & INLP Integration",
    description: "Implemented Iterative Nullspace Projection (INLP) to eliminate multiple gender directions. Applied top-PCA cleanup to remove residual bias and trained MLP downstream model for job-fit prediction. Evaluated using accuracy, AUC, and gender probe metrics.",
    period: "Late Sep 2025",
    status: "completed" as const
  },
  {
    title: "Phase 7 — ATS Scoring System Development",
    description: "Designed weighted heuristic scoring system using skill overlap, degree & certification relevance, years of experience, and resume–JD cosine similarity. Normalized features into composite ATS score with explainability through skill-level contribution breakdowns.",
    period: "Late Sep – Early Oct 2025",
    status: "completed" as const
  },
  {
    title: "Phase 8 — Bias Simulation & Causal Validation",
    description: "Introduced synthetic bias by skewing gender distributions and trained Random Forest/Logistic/MLP probes to detect gender leakage. Conducted Causal Inference via DoWhy + CausalForestDML to estimate causal effect of gender on job-fit score while controlling for confounders.",
    period: "Late Sep – Mid Oct 2025",
    status: "completed" as const
  },
  {
    title: "Phase 9 — System Optimization & Expansion",
    description: "Improving scalability, interpretability, and multi-attribute fairness. Upgrading from regex-based parsing to ML + layout-aware, enhancing skill extraction with ontology + fuzzy matching, and implementing SHAP + reasoning for explainability. Fine-tuning α (fairness weight) for optimal fairness–accuracy trade-off.",
    period: "Mid Oct 2025 – Ongoing",
    status: "in-progress" as const
  }
]

export default function ResearchProjectsPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/banners/Research_Project.png')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="container relative z-10 px-4 md:px-6 text-white">
          <div className="max-w-3xl space-y-6">
            <Badge variant="outline" className="text-white border-white/60 bg-white/10">Featured Research Project</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
            <p className="text-lg md:text-xl text-purple-100">{project.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-sm text-purple-100/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Users className="h-4 w-4" /> IEEE WIE-CEG Research Collective
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <BarChart3 className="h-4 w-4" /> {project.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <FileText className="h-4 w-4" /> {project.timeline}
              </span>
            </div>
            <p className="max-w-2xl text-purple-100/90 text-base md:text-lg">{project.summary}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-white text-purple-700 hover:bg-purple-100">
                <Link href="#project-overview">Explore the Initiative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="project-overview" className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Introduction</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{project.introduction}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Research Summary</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{project.summary}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Abstract & Methodology</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.abstract}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Primary Objectives</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {project.objectives.map((objective) => (
                      <li key={objective} className="flex items-start gap-2">
                        <ArrowUpRight className="mt-1 h-4 w-4 text-purple-600" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <h4 className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Why It Matters</h4>
                  <p className="mt-2 text-sm text-purple-900 leading-relaxed">{project.impact}</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Key Deliverables</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ListChecks className="mt-1 h-4 w-4 text-purple-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Project Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {milestones.map((milestone) => (
                    <div key={milestone.label} className="rounded-lg border border-purple-100 bg-white p-3">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-purple-700">{milestone.label}</h4>
                        <Badge variant="secondary" className="text-xs">{milestone.status}</Badge>
                      </div>
                      <p className="mt-2 leading-relaxed">{milestone.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Methodology in Focus</h2>
              <p className="text-muted-foreground text-lg">
                We blend human-centered design with rigorous fairness metrics to deliver actionable guardrails for responsible AI hiring.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {methodology.map((step) => (
                <Card key={step.title} className="h-full border-purple-100">
                  <CardHeader className="flex flex-col items-start gap-3">
                    <div className="rounded-lg bg-purple-100 p-2 text-purple-700">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Timeline</h2>
            <p className="text-muted-foreground text-lg">
              Follow the zig-zag roadmap that tracks how the team is translating bias insights into actionable mitigation playbooks.
            </p>
          </div>
          <ResearchProjectTimeline items={timeline} className="mt-12" />
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="bg-purple-50 border-purple-100">
            <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl">Related Research & Policy References</CardTitle>
                <p className="text-sm text-purple-800">
                  Explore foundational studies that inform our bias detection methodology.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.relatedLinks.map((resource) => (
                <div key={resource.href} className="flex flex-col gap-2 rounded-lg bg-white p-4 md:flex-row md:items-center md:justify-between">
                  <span className="text-sm md:text-base text-purple-900">{resource.label}</span>
                  <Button variant="outline" size="sm" asChild className="mt-2 md:mt-0">
                    <Link href={resource.href} target="_blank" rel="noopener noreferrer">
                      View Resource <LinkIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
