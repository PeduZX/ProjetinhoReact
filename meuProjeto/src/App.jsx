  import { useState } from "react";
  import { Search, Download, FileText } from "lucide-react";
  import "./App.css";

const FILTERS = {
  Área: ["Tecnologia", "Design", "RH", "Marketing", "Finanças"],
  Nível: ["Júnior", "Pleno", "Sênior", "Estagiário"],
  Disponibilidade: ["Imediata", "Freelance", "Remoto", "Híbrido"],
  Localização: [
    "Remoto",
    "Acre (AC)",
    "Alagoas (AL)",
    "Amapá (AP)",
    "Amazonas (AM)",
    "Bahia (BA)",
    "Ceará (CE)",
    "Distrito Federal (DF)",
    "Espírito Santo (ES)",
    "Goiás (GO)",
    "Maranhão (MA)",
    "Mato Grosso (MT)",
    "Mato Grosso do Sul (MS)",
    "Minas Gerais (MG)",
    "Pará (PA)",
    "Paraíba (PB)",
    "Paraná (PR)",
    "Pernambuco (PE)",
    "Piauí (PI)",
    "Rio de Janeiro (RJ)",
    "Rio Grande do Norte (RN)",
    "Rio Grande do Sul (RS)",
    "Rondônia (RO)",
    "Roraima (RR)",
    "Santa Catarina (SC)",
    "São Paulo (SP)",
    "Sergipe (SE)",
    "Tocantins (TO)",
  ],
  Empresas: [
    "CWI",
    "Device",
    "Disys",
    "HCL",
    "HT Micron",
    "Meta",
    "SAP",
    "SKA",
    "Stefanini",
  ],
};

const DEFAULT_CHECKED = new Set([
  "Tecnologia",
  "Júnior",
  "Pleno",
  "Imediata",
  "Rio Grande do Sul",
]);

const AVATAR_COLORS = {
  LM: "avatar-sky",
  AC: "avatar-emerald",
  RF: "avatar-violet",
  JO: "avatar-orange",
};

const TAG_STYLES = {
  level: "tag-level",
  status: "tag-status",
  freelance: "tag-freelance",
  hybrid: "tag-hybrid",
  skills: "tag-skills",
};

const CANDIDATES = [
  {
    id: 1,
    initials: "LM",
    name: "Lucas Mendes",
    role: "Desenvolvedor Full Stack",
    featured: true,
    tags: [
      { label: "Pleno", type: "level" },
      { label: "Disponível agora", type: "status" },
      { label: "React · Node.js · PostgreSQL", type: "skills" },
    ],
    description:
      "3 anos de experiência em desenvolvimento web. Trabalhei em startups de fintech e e-commerce. Busco oportunidade em produto.",
    location: "Porto Alegre, RS",
  },
  {
    id: 2,
    initials: "AC",
    name: "Ana Clara Silva",
    role: "UX/UI Designer",
    tags: [
      { label: "Sênior", type: "level" },
      { label: "Freelance", type: "freelance" },
      { label: "Figma · Design System · Pesquisa", type: "skills" },
    ],
    description:
      "5 anos criando interfaces para apps mobile e web. Especialista em design systems e testes com usuários.",
    location: "Remoto",
  },
  {
    id: 3,
    initials: "RF",
    name: "Rafael Ferreira",
    role: "Analista de Dados",
    tags: [
      { label: "Júnior", type: "level" },
      { label: "Disponível agora", type: "status" },
      { label: "Python · SQL · Power BI", type: "skills" },
    ],
    description:
      "Formado em Ciência da Computação, com experiência em análise de dados e dashboards. Busco primeira oportunidade em dados.",
    location: "Esteio, RS",
  },
  {
    id: 4,
    initials: "JO",
    name: "Juliana Oliveira",
    role: "Engenheira de Software",
    tags: [
      { label: "Pleno", type: "level" },
      { label: "Híbrido", type: "hybrid" },
      { label: "Java · Spring · AWS", type: "skills" },
    ],
    description:
      "Desenvolvimento de sistemas backend com foco em escalabilidade e arquitetura de microsserviços. 4 anos de experiência.",
    location: "Porto Alegre, RS",
  },
];

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

function Tag({ label, type }) {
  return <span className={`tag ${TAG_STYLES[type]}`}>{label}</span>;
}

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function CandidateCard({ candidate }) {
  const [showCurriculum, setShowCurriculum] = useState(false);

  return (
    <div className={`card ${candidate.featured ? "card-featured" : ""}`}>
      {candidate.featured && <span className="badge-featured">Destaque</span>}

      <div className="card-header">
        <div className={`avatar ${AVATAR_COLORS[candidate.initials]}`}>
          {candidate.initials}
        </div>
        <div>
          <h3 className="candidate-name">{candidate.name}</h3>
          <p className="candidate-role">{candidate.role}</p>
        </div>
      </div>

      <div className="tag-row">
        {candidate.tags.map((tag) => (
          <Tag key={tag.label} {...tag} />
        ))}
      </div>

      <p className="candidate-description">{candidate.description}</p>

      <div className="card-footer">
        <span className="candidate-location">{candidate.location}</span>
        <div className="card-actions">
          <button className="btn-outline">
            <Download size={16} />
            Baixar PDF
          </button>
          <button
            className="btn-outline"
            onClick={() => setShowCurriculum(!showCurriculum)}
          >
            <FileText size={16} />
            Ver currículo
          </button>
        </div>
      </div>

      {showCurriculum && (
        <Modal onClose={() => setShowCurriculum(false)}>
          <h3 className="textInside-showCurriculum" >{candidate.name}</h3>
          <p className="textInside-showCurriculum" >{candidate.role}</p>
          <p className="textInside-showCurriculum" >{candidate.description}</p>
        </Modal>
      )}
    </div>
  );
}

export default function App() {
  const [checked, setChecked] = useState(DEFAULT_CHECKED);
  const [query, setQuery] = useState("");

  const toggle = (label) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          Currilos<span className="logo-accent">Link</span>
        </div>
        <nav className="nav">
          <button className="nav-link">Entrar</button>
          <button className="nav-link">Publicar currículo</button>
        </nav>
      </header>

      <div className="search-bar-wrap">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por cargo, habilidade, nome..."
            className="search-input"
          />
          <button className="btn-primary">Buscar</button>
        </div>
      </div>

      <div className="content">
        <aside className="sidebar">
          {Object.entries(FILTERS).map(([group, options]) => (
            <div key={group} className="filter-group">
              <h4 className="filter-title">{group}</h4>
              {options.map((opt) => (
                <Checkbox
                  key={opt}
                  label={opt}
                  checked={checked.has(opt)}
                  onChange={() => toggle(opt)}
                />
              ))}
            </div>
          ))}
        </aside>

        <main className="main">
          <p className="results-count">
            {CANDIDATES.length * 6} candidatos encontrados em Tecnologia
          </p>
          <div className="card-list">
            {CANDIDATES.map((c) => (
              <CandidateCard key={c.id} candidate={c} />
            ))}
          </div>
        </main>
        <script type="module" src="/src/scripts/script.js"></script>
      </div>
    </div>
  );
}
