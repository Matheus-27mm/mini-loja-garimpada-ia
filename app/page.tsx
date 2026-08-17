"use client";

import { useMemo, useState } from "react";

const products = [
  { name: "JBL Tune 510BT", category: "Áudio", tag: "+100 mil vendidos", image: "https://http2.mlstatic.com/D_NQ_NP_604308-MLA99939925367_112025-OO.png", description: "Headphone Bluetooth com até 40 horas de bateria e mais de 14 mil avaliações.", link: "https://meli.la/2sj7a1E" },
  { name: "Mouse Logitech G203", category: "Setup & PC", tag: "+52 mil avaliações", image: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/l/o/logitech_g203_pc.png", description: "Um dos mouses gamer mais populares, com sensor de 8.000 DPI e iluminação RGB.", link: "https://meli.la/28Cgc9m" },
  { name: "Echo Dot 5ª Geração", category: "Casa inteligente", tag: "+100 mil vendidos", image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/467285/Echo-Dot-5-Gera-o-Amazon-Com-Alexa-Smart-Speaker-Preta_1690552729_gg.jpg", description: "Alexa, música e automação residencial em um dos dispositivos inteligentes mais vendidos.", link: "https://meli.la/2Df8td2" },
  { name: "Tomada Inteligente Ekaza", category: "Casa inteligente", tag: "+50 mil vendidos", image: "https://cdn.shoppub.io/cdn-cgi/image/w%3D1500%2Ch%3D1500%2Cq%3D80%2Cf%3Dauto/oficinadosbits/media/uploads/produtos/foto/qaefckwm/file.png", description: "Controle por aplicativo e voz, programação de horários e monitoramento de energia.", link: "https://meli.la/2uwpUwd" },
  { name: "Philips TAT1139 TWS", category: "Áudio", tag: "+10 mil vendidos", image: "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/f/o/fone-de-ouvido-bluetooth-philips-tat1139_1198836.jpg", description: "Fone compacto resistente à água, com microfone e até 26 horas com o estojo.", link: "https://meli.la/1GEknNU" },
  { name: "SSD Kingston NV3 1TB", category: "Setup & PC", tag: "+50 mil vendidos", image: "https://images.kabum.com.br/produtos/fotos/621162/ssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082185_gg.jpg", description: "SSD NVMe PCIe 4.0 com leitura de até 6.000 MB/s e mais de 11 mil avaliações.", link: "https://meli.la/2zkN745" },
  { name: "Powerbank Baseus Qpow", category: "Mobilidade", tag: "Carregamento rápido", image: "https://www.sharjahcoop.ae/medias/1200Wx1200H-V00198-6953156206397-001.jpg?context=bWFzdGVyfGltYWdlc3w5MjUwNXxpbWFnZS9qcGVnfGFEVTNMMmczT0M4eE1EQTNNRGs0TURrMU1qQTVOQzh4TWpBd1YzZ3hNakF3U0Y5V01EQXhPVGhmTmprMU16RTFOakl3TmpNNU4xOHdNREV1YW5CbnxhZjc5ZjdjM2NmYzg5ZDNmM2JkODBiMjI1YjE1YTE4OWQ5NmZmMzczMmYwMTUxZjI5NGEwYWQwMjlkNmQxNjZm", description: "20.000mAh, display digital, cabos integrados e carregamento rápido de até 22,5W.", link: "https://meli.la/1VbkU3z" },
  { name: "Redragon Kumara RGB", category: "Setup & PC", tag: "Teclado mecânico", image: "https://i.ibb.co/b5FD27G5/Whats-App-Image-2025-11-08-at-19-13-50.jpg", description: "Teclado mecânico compacto, resistente e com iluminação RGB para completar o setup.", link: "https://www.mercadolivre.com.br/teclado-gamer-redragon-kumara-qwerty-outemu-black-portugus-brasil-cor-preto-com-luz-rgb/p/MLB16091690" },
  { name: "Monitor LG UltraGear", category: "Setup & PC", tag: "Upgrade de setup", image: "https://i.ibb.co/gFHfxfLc/MONITOR.jpg", description: "Tela IPS de 24 polegadas, 180Hz e 1ms para jogos fluidos e trabalho confortável.", link: "https://www.mercadolivre.com.br/monitor-gamer-lg-ultragear-24-24gs60f-b-ips-full-hd-180hz-1ms-gtg-nvidia-g-sync-amd-freesync-hdr10-srgb-99-hdmi-displayport/p/MLB38947984" },
  { name: "JBL Quantum 50", category: "Áudio", tag: "Para jogar", image: "https://i.ibb.co/mVTz8Xb2/fone-jbl-preto.webp", description: "Fone in-ear com microfone e assinatura sonora voltada para games.", link: "https://produto.mercadolivre.com.br/MLB-1738919833-fone-de-ouvido-gamer-com-controle-de-volume-quantum-50-jbl-_JM" },
  { name: "Caixa de Som Inova", category: "Áudio", tag: "Compacta", image: "https://i.ibb.co/zTjJnX3C/mini-caixa-de-som.webp", description: "Caixa Bluetooth portátil com rádio e som potente para o tamanho.", link: "https://produto.mercadolivre.com.br/MLB-5693017652-inova-caixa-de-som-mini-bluetooth-tws-grave-potent-com-radio-_JM" },
  { name: "Smartwatch Peje", category: "Mobilidade", tag: "Para o dia a dia", image: "https://i.ibb.co/KdPyPLR/smartwatch.webp", description: "Relógio inteligente com GPS, modos esportivos e integração com Strava.", link: "https://www.mercadolivre.com.br/relogio-tatico-militar-peje-smartwatch-gps-strava-esporte-preto-esportivo-preto-preto/p/MLB62578487" },
  { name: "Powerbank 20.000mAh", category: "Mobilidade", tag: "Opção acessível", image: "https://i.ibb.co/6cPSr6Hm/Whats-App-Image-2025-11-13-at-16-24-53.jpg", description: "Bateria externa com cabos integrados e display digital para viagens e rotina.", link: "https://www.mercadolivre.com.br/power-bank-20000mah-com-cabo-embutido-power-bank-de-viagem-com-carga-rapida-de-225w-e-display-digital-led-bateria-usb-c-para-iphone-17161514131211-series-ipad-samsung-androidbranco/p/MLB63849176" },
  { name: "Fone Bluetooth TWS", category: "Áudio", tag: "Custo-benefício", image: "https://i.ibb.co/9d7GjLP/fone-tws.webp", description: "Fone sem fio com visor digital, controles por toque e estojo carregador.", link: "https://www.mercadolivre.com.br/p/MLB40798108" },
  { name: "Webcam Logitech C270", category: "Setup & PC", tag: "+100 mil vendidos", image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/332486", description: "Webcam HD 720p com microfone integrado, ideal para reuniões, aulas e chamadas.", link: "https://meli.la/2UTr6tE" },
  { name: "Suporte Rishon para Notebook", category: "Setup & PC", tag: "+50 mil vendidos", image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/300254/Suporte-Para-Notebook-6-a-17-Laptop-Stand-Alum-nio-Ajust-vel-Dobr-vel-Conforto_1668631731_gg.jpg", description: "Suporte dobrável em alumínio que melhora a postura e a ventilação do notebook.", link: "https://meli.la/13Uig1D" },
  { name: "Hub USB-C Ugreen 5 em 1", category: "Setup & PC", tag: "Conectividade", image: "https://oechsle.vteximg.com.br/arquivos/ids/15548145-1000-1000/image-0.jpg?v=638278932233730000", description: "Hub compacto com HDMI 4K, três portas USB e Power Delivery de até 100W.", link: "https://meli.la/2gYPRii" },
  { name: "Microfone Fifine K690", category: "Setup & PC", tag: "Streaming e reuniões", image: "https://a-static.mlcdn.com.br/800x800/microfone-de-gravacao-de-estudio-usb-fifine-k690-para-pc-ps4-mac/nocnocestadosunidos/buybox-cpb08kd5nhkv/f0ca6113698078b5bb89bfb915948822.jpeg", description: "Microfone USB de mesa com quatro padrões de captação, monitoramento e botão mute.", link: "https://meli.la/2eRdAaK" },
  { name: "Lâmpada Smart TP-Link Tapo", category: "Casa inteligente", tag: "Automação acessível", image: "https://imgs.extra.com.br/1582746483/1xg.jpg?imwidth=1000", description: "Lâmpada RGB com ajuste de brilho e temperatura, controle por app, Alexa e Google.", link: "https://meli.la/2Y3KagS" },
  { name: "Câmera Intelbras iM5 SC", category: "Casa inteligente", tag: "+50 mil vendidos", image: "https://images.tcdn.com.br/img/img_prod/1140357/camera_de_video_intelbras_wi_fi_full_hd_com_cartao_microsd_32gb_branca_im5_sc_3615_17_080ec6e159cf1185d572c98c608a2fee.jpg", description: "Câmera externa Full HD com visão noturna, detecção de movimento e proteção IP67.", link: "https://meli.la/1pjggpd" },
  { name: "Controle Universal RM6 Pro", category: "Casa inteligente", tag: "+10 mil vendidos", image: "https://http2.mlstatic.com/D_Q_NP_989903-MLB81514762165_012025-O.webp", description: "Centraliza aparelhos IR e RF no celular e adiciona comandos por Alexa ou Google.", link: "https://meli.la/1C6vQKh" },
  { name: "Fita LED RGB 5050", category: "Casa inteligente", tag: "Mais vendida", image: "https://http2.mlstatic.com/D_Q_NP_768590-MLA99599806208_122025-O.webp", description: "Fita de 5 metros com Bluetooth, controle por aplicativo e sincronização com música.", link: "https://meli.la/1YUVuh1" },
  { name: "Carregador GaN 65W", category: "Acessórios", tag: "Para celular e notebook", image: "https://infostore.vtexassets.com/arquivos/ids/264382-800-auto?aspect=true&height=auto&v=638774985075930000&width=800", description: "Fonte compacta com Power Delivery para carregar celulares, tablets e notebooks USB-C.", link: "https://meli.la/2USsrge" },
  { name: "Carregador Veicular Hrebos", category: "Acessórios", tag: "+5 mil vendidos", image: "https://http2.mlstatic.com/D_Q_NP_2X_827087-MLB81480527454_122024-F.webp", description: "Carregador veicular de 20W com USB-C, USB convencional e cabo incluso.", link: "https://meli.la/316BsGg" },
  { name: "Suporte Veicular 360°", category: "Acessórios", tag: "Mais vendido", image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/507825/xlarge/Suporte-Celular-Veicular-Elg-Garra-360-Ventosa-Smartphones-De-3-5-Polegadas-A-6-Polegadas-Ch356_1758313480.jpg", description: "Suporte com trava automática, ventosa e rotação 360° para navegação mais segura.", link: "https://meli.la/2brFi7b" },
  { name: "Cabo Baseus USB-C 100W", category: "Acessórios", tag: "Carga rápida", image: "https://baseusonline.com/uploads/img/pi/172/172328034606/1723280346.jpg", description: "Cabo USB-C trançado com chip E-Marker, carga de até 100W e construção reforçada.", link: "https://meli.la/1sG12kN" },
];

const categories = ["Todos", "Áudio", "Setup & PC", "Casa inteligente", "Mobilidade", "Acessórios"];

const productSignals: Record<string, { rating: string; proof: string }> = {
  "JBL Tune 510BT": { rating: "4,8 ★", proof: "+100 mil vendidos" },
  "Mouse Logitech G203": { rating: "4,9 ★", proof: "+52 mil avaliações" },
  "Echo Dot 5ª Geração": { rating: "4,9 ★", proof: "+100 mil vendidos" },
  "Tomada Inteligente Ekaza": { rating: "4,9 ★", proof: "+50 mil vendidos" },
  "Philips TAT1139 TWS": { rating: "4,8 ★", proof: "+10 mil vendidos" },
  "SSD Kingston NV3 1TB": { rating: "4,9 ★", proof: "+50 mil vendidos" },
  "Powerbank Baseus Qpow": { rating: "4,9 ★", proof: "+1.000 vendidos" },
  "Redragon Kumara RGB": { rating: "4,9 ★", proof: "Escolha gamer" },
  "Monitor LG UltraGear": { rating: "4,9 ★", proof: "+8 mil avaliações" },
  "JBL Quantum 50": { rating: "4,7 ★", proof: "Áudio gamer" },
  "Caixa de Som Inova": { rating: "4,7 ★", proof: "+2 mil avaliações" },
  "Smartwatch Peje": { rating: "5,0 ★", proof: "GPS e Strava" },
  "Powerbank 20.000mAh": { rating: "4,9 ★", proof: "Cabos integrados" },
  "Fone Bluetooth TWS": { rating: "4,8 ★", proof: "Bom custo-benefício" },
  "Webcam Logitech C270": { rating: "4,8 ★", proof: "+100 mil vendidos" },
  "Suporte Rishon para Notebook": { rating: "4,8 ★", proof: "+8 mil avaliações" },
  "Hub USB-C Ugreen 5 em 1": { rating: "4,9 ★", proof: "+1.000 vendidos" },
  "Microfone Fifine K690": { rating: "5,0 ★", proof: "Áudio versátil" },
  "Lâmpada Smart TP-Link Tapo": { rating: "4,7 ★", proof: "+860 avaliações" },
  "Câmera Intelbras iM5 SC": { rating: "4,9 ★", proof: "+50 mil vendidos" },
  "Controle Universal RM6 Pro": { rating: "4,7 ★", proof: "+10 mil vendidos" },
  "Fita LED RGB 5050": { rating: "4,8 ★", proof: "Mais vendida" },
  "Carregador GaN 65W": { rating: "4,9 ★", proof: "Power Delivery" },
  "Carregador Veicular Hrebos": { rating: "4,8 ★", proof: "+5 mil vendidos" },
  "Suporte Veicular 360°": { rating: "4,7 ★", proof: "Mais vendido" },
  "Cabo Baseus USB-C 100W": { rating: "4,9 ★", proof: "Carga até 100W" },
};

type Product = (typeof products)[number];

function ProductCard({ product, index, featured = false }: { product: Product; index: number; featured?: boolean }) {
  const signal = productSignals[product.name];
  return <article className={`product-card${featured ? " featured-card" : ""}`}>
    <div className="product-image"><img src={product.image} alt={product.name} /><span>{featured ? "Destaque" : product.tag}</span></div>
    <div className="product-info">
      <small>{product.category}</small><h3>{product.name}</h3>
      <div className="product-signal"><strong>{signal.rating}</strong><span>{signal.proof}</span></div>
      <p>{product.description}</p>
      <a href={product.link} target="_blank" rel="noopener sponsored">Conferir preço atual <span>↗</span></a>
    </div>
    <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
  </article>;
}

export default function Home() {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter((product) =>
    (category === "Todos" || product.category === category) &&
    product.name.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <div className="announcement">Curadoria independente de tecnologia e lifestyle</div>
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="Garimpada da Net — início"><span className="brand-mark">G</span><span><strong>GARIMPADA</strong><small>DA NET</small></span></a>
        <nav aria-label="Navegação principal"><a href="#produtos">Produtos</a><a href="#como-funciona">Como funciona</a><a href="#sobre">Sobre</a></nav>
        <a className="nav-cta" href="#produtos">Explorar coleção <span>→</span></a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><i /> ESCOLHAS QUE FAZEM SENTIDO</span>
          <h1>Tecnologia bem escolhida para uma rotina <em>melhor.</em></h1>
          <p>Uma seleção cuidadosa de produtos úteis, bonitos e bem avaliados. Menos excesso, mais clareza para você escolher.</p>
          <div className="hero-actions"><a className="button primary" href="#produtos">Ver produtos <span>→</span></a><a className="button ghost" href="#como-funciona">Conheça a curadoria</a></div>
          <div className="proof"><span>✓ Produtos selecionados</span><span>✓ Compra no Mercado Livre</span><span>✓ Links atualizados</span></div>
        </div>
      </section>

      <section className="catalog shell" id="produtos">
        <div className="section-heading"><div><span className="kicker">CURADORIA GARIMPADA</span><h2>Escolhas que valem a pena</h2><p>Produtos populares, bem avaliados e escolhidos para facilitar sua decisão.</p></div><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar na coleção" aria-label="Buscar produto" /></label></div>
        {category === "Todos" && !query && <section className="featured-products"><div className="category-heading"><div><span className="kicker">COMECE POR AQUI</span><h3>Mais vendidos</h3></div><span>Os favoritos da comunidade</span></div><div className="product-grid featured-grid">{featuredProducts.map((product,index)=><ProductCard key={product.name} product={product} index={index} featured />)}</div></section>}
        <div className="catalog-controls"><div className="filters" role="group" aria-label="Filtrar por categoria">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>)}</div></div>
        <p className="affiliate-note"><span>i</span> Esta página contém links de afiliado. Podemos receber uma comissão pela compra, sem nenhum custo adicional para você.</p>
        {category === "Todos" ? (
          <div className="catalog-sections">
            {categories.slice(1).map((section) => {
              const sectionProducts = filtered.filter((product) => product.category === section);
              if (!sectionProducts.length) return null;
              return <section className="category-section" key={section}>
                <div className="category-heading"><h3>{section}</h3><span>{sectionProducts.length} produtos</span></div>
                <div className="product-grid">{sectionProducts.map((product, index) => (
                  <ProductCard key={product.name} product={product} index={index} />
                ))}</div>
              </section>;
            })}
          </div>
        ) : (
          <div className="product-grid">{filtered.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}</div>
        )}
        {!filtered.length && <p className="empty">Nenhum produto encontrado. Tente outro termo.</p>}
      </section>

      <section className="process shell" id="como-funciona"><div><span className="kicker">NOSSO CRITÉRIO</span><h2>Por que esses produtos?</h2><p className="process-intro">Cada item precisa apresentar sinais reais de confiança e utilidade antes de entrar na coleção.</p></div><ol><li><b>01</b><span><strong>Alta avaliação</strong>Priorizamos produtos bem avaliados e com comentários suficientes para uma decisão mais segura.</span></li><li><b>02</b><span><strong>Volume de vendas</strong>Popularidade não é tudo, mas ajuda a identificar escolhas já validadas por muitas pessoas.</span></li><li><b>03</b><span><strong>Compra no marketplace</strong>Preço, pagamento, entrega e garantia são conferidos diretamente no Mercado Livre.</span></li></ol></section>
      <section className="about shell" id="sobre"><div className="about-tag">GARIMPADA<br/>DA NET</div><div><span className="kicker">NOSSO PROPÓSITO</span><h2>Menos rolagem.<br/>Mais descoberta boa.</h2><p>A Garimpada da Net nasceu para separar produto interessante de anúncio barulhento. Nossa seleção é independente e pode conter links de afiliado — quando você compra por eles, podemos receber uma comissão sem alterar o seu preço.</p></div></section>
      <footer><div className="shell footer-inner"><div className="brand"><span className="brand-mark">G</span><span><strong>GARIMPADA</strong><small>DA NET</small></span></div><p>Curadoria de tecnologia, áudio, casa inteligente e setup.</p><nav className="footer-nav" aria-label="Links do rodapé"><a href="#produtos">Produtos</a><a href="#como-funciona">Critérios</a><a href="#sobre">Sobre</a></nav><div className="footer-disclosure"><strong>Transparência</strong><p>Participamos do Programa de Afiliados do Mercado Livre. Alguns links podem gerar comissão sem alterar o preço para você.</p></div><small>© 2026 Garimpada da Net · Catálogo atualizado em agosto de 2026 · Preços e disponibilidade são definidos pelos vendedores.</small></div></footer>
    </main>
  );
}
