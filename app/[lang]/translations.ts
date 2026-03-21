export const languages = ['es', 'de', 'fr', 'pt', 'ja'] as const;
export type Lang = (typeof languages)[number];

export interface Translation {
  lang: Lang;
  langName: string;
  badge: string;
  headline: string;
  subtitle: string;
  viewOnGithub: string;
  whatItLooksLike: string;
  agentOverview: string;
  heartbeatDetail: string;
  whatYouGet: string;
  whatYouGetSub: string;
  features: { title: string; description: string }[];
  oneCommand: string;
  oneCommandSub: string;
  clickToCopy: string;
  copied: string;
  steps: { title: string; desc: string }[];
  quote: string;
  quoteAuthor: string;
  metaTitle: string;
  metaDescription: string;
}

export const translations: Record<Lang, Translation> = {
  es: {
    lang: 'es',
    langName: 'Español',
    badge: 'Código abierto · Licencia MIT',
    headline: 'Tus agentes están quemando tokens.\n¿Sabes dónde?',
    subtitle: 'Trazabilidad end-to-end para OpenClaw. Rastrea costos, depura heartbeats, detecta desperdicios — un solo comando.',
    viewOnGithub: 'Ver en GitHub',
    whatItLooksLike: 'Cómo se ve',
    agentOverview: 'Vista general de agentes',
    heartbeatDetail: 'Detalle del heartbeat',
    whatYouGet: 'Lo que obtienes',
    whatYouGetSub: 'Todo lo que necesitas para entender tus agentes.',
    features: [
      { title: 'Vista general en vivo', description: 'Ve el estado de cada agente, su último heartbeat y costo total de un vistazo. Se actualiza automáticamente.' },
      { title: 'Costo por heartbeat', description: 'Profundiza en cualquier heartbeat para ver exactamente qué llamadas consumieron tu presupuesto.' },
      { title: 'Guardarraíles de presupuesto', description: 'Establece límites diarios y mensuales. Recibe alertas visuales antes de que tus agentes vacíen tu billetera.' },
      { title: 'Comparar heartbeats', description: 'Elige dos heartbeats, ve qué cambió. Crecimiento de contexto, delta de costo, diferencias de uso.' },
      { title: 'Detección de desperdicios', description: 'Sugerencias automáticas cuando los agentes releen archivos o hacen llamadas API redundantes.' },
      { title: 'API REST completa', description: 'Cada métrica disponible programáticamente. Construye tus propias alertas e integraciones.' },
    ],
    oneCommand: 'Un comando. Todo visible.',
    oneCommandSub: 'Sin archivos de configuración. Sin registro. Sin nube. Funciona localmente.',
    clickToCopy: 'Clic para copiar',
    copied: '¡Copiado!',
    steps: [
      { title: 'Ejecuta el comando', desc: 'Inicia el colector de trazas' },
      { title: 'Abre localhost:3141', desc: 'Tu panel de observabilidad' },
      { title: 'Ve todo', desc: 'Costos, trazas, heartbeats en vivo' },
    ],
    quote: 'No tenía idea de que uno de mis agentes gastaba $8 por heartbeat hasta que ejecuté openclaw-trace. Lo arreglé en diez minutos.',
    quoteAuthor: '— Usuario de OpenClaw',
    metaTitle: 'OpenClaw Trace — Observabilidad para agentes IA',
    metaDescription: 'Panel de observabilidad gratuito y open source para agentes IA de OpenClaw. Rastrea costos, depura heartbeats, detecta desperdicios.',
  },
  de: {
    lang: 'de',
    langName: 'Deutsch',
    badge: 'Open Source · MIT-Lizenz',
    headline: 'Deine Agenten verbrennen Tokens.\nWeißt du, wo?',
    subtitle: 'End-to-End-Tracing für OpenClaw. Kosten verfolgen, Heartbeats debuggen, Verschwendung erkennen — ein Befehl genügt.',
    viewOnGithub: 'Auf GitHub ansehen',
    whatItLooksLike: 'So sieht es aus',
    agentOverview: 'Agenten-Übersicht',
    heartbeatDetail: 'Heartbeat-Detail',
    whatYouGet: 'Was du bekommst',
    whatYouGetSub: 'Alles, was du brauchst, um deine Agenten zu verstehen.',
    features: [
      { title: 'Live-Agenten-Übersicht', description: 'Sieh Status, letzten Heartbeat und Gesamtkosten jedes Agenten auf einen Blick. Aktualisiert sich automatisch.' },
      { title: 'Kosten pro Heartbeat', description: 'Analysiere jeden Heartbeat im Detail — welche Tool-Aufrufe dein Budget verbraucht haben.' },
      { title: 'Budget-Leitplanken', description: 'Setze tägliche und monatliche Limits. Visuelle Warnungen, bevor die Kosten explodieren.' },
      { title: 'Heartbeats vergleichen', description: 'Wähle zwei Heartbeats, sieh die Unterschiede. Kontext-Wachstum, Kosten-Delta, Tool-Nutzung.' },
      { title: 'Verschwendungserkennung', description: 'Automatische Hinweise, wenn Agenten Dateien erneut lesen oder redundante API-Aufrufe machen.' },
      { title: 'Vollständige REST-API', description: 'Jede Metrik programmatisch verfügbar. Baue eigene Alerts und Integrationen.' },
    ],
    oneCommand: 'Ein Befehl. Alles sichtbar.',
    oneCommandSub: 'Keine Konfigurationsdateien. Keine Anmeldung. Keine Cloud. Läuft lokal.',
    clickToCopy: 'Klicken zum Kopieren',
    copied: 'Kopiert!',
    steps: [
      { title: 'Befehl ausführen', desc: 'Startet den Trace-Collector' },
      { title: 'localhost:3141 öffnen', desc: 'Dein Observability-Dashboard' },
      { title: 'Alles sehen', desc: 'Kosten, Traces, Heartbeats live' },
    ],
    quote: 'Ich hatte keine Ahnung, dass einer meiner Agenten $8 pro Heartbeat ausgab, bis ich openclaw-trace ausführte. In zehn Minuten behoben.',
    quoteAuthor: '— OpenClaw-Nutzer',
    metaTitle: 'OpenClaw Trace — Observability-Dashboard für KI-Agenten',
    metaDescription: 'Kostenloses Open-Source-Observability-Dashboard für OpenClaw KI-Agenten. Kosten verfolgen, Heartbeats debuggen, Verschwendung erkennen.',
  },
  fr: {
    lang: 'fr',
    langName: 'Français',
    badge: 'Open source · Licence MIT',
    headline: 'Vos agents brûlent des tokens.\nSavez-vous où ?',
    subtitle: 'Traçabilité de bout en bout pour OpenClaw. Suivez les coûts, déboguez les heartbeats, détectez le gaspillage — une seule commande.',
    viewOnGithub: 'Voir sur GitHub',
    whatItLooksLike: 'À quoi ça ressemble',
    agentOverview: 'Vue d\'ensemble des agents',
    heartbeatDetail: 'Détail du heartbeat',
    whatYouGet: 'Ce que vous obtenez',
    whatYouGetSub: 'Tout ce qu\'il faut pour comprendre vos agents.',
    features: [
      { title: 'Vue en direct des agents', description: 'Voyez le statut de chaque agent, son dernier heartbeat et le coût total en un coup d\'œil. Mise à jour automatique.' },
      { title: 'Coût par heartbeat', description: 'Explorez chaque heartbeat pour voir exactement quels appels ont consommé votre budget.' },
      { title: 'Garde-fous budgétaires', description: 'Définissez des limites quotidiennes et mensuelles. Alertes visuelles avant que vos agents ne vident votre portefeuille.' },
      { title: 'Comparer les heartbeats', description: 'Choisissez deux heartbeats, voyez ce qui a changé. Croissance du contexte, delta de coût, utilisation des outils.' },
      { title: 'Détection du gaspillage', description: 'Suggestions automatiques quand les agents relisent des fichiers ou font des appels API redondants.' },
      { title: 'API REST complète', description: 'Chaque métrique disponible par programmation. Créez vos propres alertes et intégrations.' },
    ],
    oneCommand: 'Une commande. Tout est visible.',
    oneCommandSub: 'Pas de fichiers de config. Pas d\'inscription. Pas de cloud. Fonctionne en local.',
    clickToCopy: 'Cliquer pour copier',
    copied: 'Copié !',
    steps: [
      { title: 'Exécutez la commande', desc: 'Lance le collecteur de traces' },
      { title: 'Ouvrez localhost:3141', desc: 'Votre tableau de bord' },
      { title: 'Voyez tout', desc: 'Coûts, traces, heartbeats en direct' },
    ],
    quote: 'Je ne savais pas qu\'un de mes agents dépensait 8$ par heartbeat jusqu\'à ce que je lance openclaw-trace. Corrigé en dix minutes.',
    quoteAuthor: '— Utilisateur OpenClaw',
    metaTitle: 'OpenClaw Trace — Tableau de bord d\'observabilité pour agents IA',
    metaDescription: 'Tableau de bord d\'observabilité gratuit et open source pour les agents IA OpenClaw. Suivez les coûts, déboguez les heartbeats, détectez le gaspillage.',
  },
  pt: {
    lang: 'pt',
    langName: 'Português',
    badge: 'Código aberto · Licença MIT',
    headline: 'Seus agentes estão queimando tokens.\nVocê sabe onde?',
    subtitle: 'Rastreamento end-to-end para OpenClaw. Acompanhe custos, depure heartbeats, detecte desperdícios — um único comando.',
    viewOnGithub: 'Ver no GitHub',
    whatItLooksLike: 'Como fica',
    agentOverview: 'Visão geral dos agentes',
    heartbeatDetail: 'Detalhe do heartbeat',
    whatYouGet: 'O que você recebe',
    whatYouGetSub: 'Tudo que você precisa para entender seus agentes.',
    features: [
      { title: 'Visão geral ao vivo', description: 'Veja o status de cada agente, último heartbeat e custo total de relance. Atualização automática.' },
      { title: 'Custo por heartbeat', description: 'Explore qualquer heartbeat para ver exatamente quais chamadas consumiram seu orçamento.' },
      { title: 'Proteções de orçamento', description: 'Defina limites diários e mensais. Alertas visuais antes que seus agentes esvaziem sua carteira.' },
      { title: 'Comparar heartbeats', description: 'Escolha dois heartbeats, veja o que mudou. Crescimento de contexto, delta de custo, uso de ferramentas.' },
      { title: 'Detecção de desperdício', description: 'Sugestões automáticas quando agentes releem arquivos ou fazem chamadas API redundantes.' },
      { title: 'API REST completa', description: 'Cada métrica disponível programaticamente. Construa seus próprios alertas e integrações.' },
    ],
    oneCommand: 'Um comando. Tudo visível.',
    oneCommandSub: 'Sem arquivos de configuração. Sem cadastro. Sem nuvem. Funciona localmente.',
    clickToCopy: 'Clique para copiar',
    copied: 'Copiado!',
    steps: [
      { title: 'Execute o comando', desc: 'Inicia o coletor de traces' },
      { title: 'Abra localhost:3141', desc: 'Seu painel de observabilidade' },
      { title: 'Veja tudo', desc: 'Custos, traces, heartbeats ao vivo' },
    ],
    quote: 'Eu não fazia ideia de que um dos meus agentes gastava $8 por heartbeat até rodar o openclaw-trace. Corrigi em dez minutos.',
    quoteAuthor: '— Usuário OpenClaw',
    metaTitle: 'OpenClaw Trace — Painel de observabilidade para agentes IA',
    metaDescription: 'Painel de observabilidade gratuito e open source para agentes IA OpenClaw. Acompanhe custos, depure heartbeats, detecte desperdícios.',
  },
  ja: {
    lang: 'ja',
    langName: '日本語',
    badge: 'オープンソース · MITライセンス',
    headline: 'あなたのエージェントはトークンを\n消費しています。どこで？',
    subtitle: 'OpenClawのためのエンドツーエンドトレーシング。コスト追跡、ハートビートのデバッグ、無駄の検出 — コマンド一つで開始。',
    viewOnGithub: 'GitHubで見る',
    whatItLooksLike: '画面イメージ',
    agentOverview: 'エージェント概要',
    heartbeatDetail: 'ハートビート詳細',
    whatYouGet: '機能一覧',
    whatYouGetSub: 'エージェントを理解するために必要なすべて。',
    features: [
      { title: 'ライブエージェント概要', description: '各エージェントのステータス、最新のハートビート、総コストを一目で確認。自動更新。' },
      { title: 'ハートビートごとのコスト', description: 'どのツール呼び出しが予算を消費したか、ハートビートごとに詳細を確認。' },
      { title: '予算ガードレール', description: '日次・月次の制限を設定。エージェントが予算を超過する前に視覚的に警告。' },
      { title: 'ハートビート比較', description: '2つのハートビートを選択して違いを確認。コンテキスト増加、コスト差分、ツール使用量。' },
      { title: '無駄検出', description: 'エージェントがファイルを再読み込みしたり、冗長なAPI呼び出しをした時に自動で提案。' },
      { title: '完全なREST API', description: 'すべてのメトリクスをプログラムで利用可能。独自のアラートや統合を構築。' },
    ],
    oneCommand: 'コマンド一つ。すべてが見える。',
    oneCommandSub: '設定ファイル不要。サインアップ不要。クラウド不要。ローカルで動作。',
    clickToCopy: 'クリックでコピー',
    copied: 'コピーしました！',
    steps: [
      { title: 'コマンドを実行', desc: 'トレースコレクターを起動' },
      { title: 'localhost:3141を開く', desc: 'オブザーバビリティダッシュボード' },
      { title: 'すべてを見る', desc: 'コスト、トレース、ハートビートをライブで' },
    ],
    quote: 'openclaw-traceを実行するまで、エージェントの1つがハートビートごとに$8使っていることに気づきませんでした。10分で修正しました。',
    quoteAuthor: '— OpenClawユーザー',
    metaTitle: 'OpenClaw Trace — AIエージェントのオブザーバビリティダッシュボード',
    metaDescription: 'OpenClaw AIエージェント用の無料オープンソースオブザーバビリティダッシュボード。コスト追跡、ハートビートのデバッグ、無駄の検出。',
  },
};
