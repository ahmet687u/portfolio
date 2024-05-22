import type { IShareButton, TNavbarLinks, IPortfolioCards, TLocales } from "@/types";

import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact } from "react-icons/fa";

export const DEFAULT_LOCALES: TLocales = "tr"
export const LOCALES: Array<TLocales> = ["tr", "en"]

export const navbarLinks: TNavbarLinks[] = [
  {
    route: "/",
    tr: "Anasayfa",
    en: "Home",
  },
  {
    route: "/hakkimda",
    tr: "Hakkımda",
    en: "About",
  },
  {
    route: "/calismalarim",
    tr: "Çalışmalarım",
    en: "Portfolio",
  }
]

export const experienceCircleIcons: IShareButton[] = [
  { Icon: FaHtml5 }, { Icon: FaCss3Alt }, { Icon: IoLogoJavascript }, { Icon: FaSass }, { Icon: FaBootstrap }, { Icon: FaReact }, { Icon: SiRedux }, { Icon: TbBrandNextjs }, { Icon: BiLogoTypescript }
]

export const aboutText = [
  `Front-end web geliştirme alanına olan ilgim sadece bir hobi değil, aynı zamanda kariyerimdeki odak noktam. Genel anlamda Next.js, React ve TypeScript gibi modern teknolojilere hakimim ve bu alanda kendimi sürekli olarak ileri taşımak için çabalıyorum. Her geçen gün yeni bir şeyler öğrenmeye ve yeteneklerimi geliştirmeye odaklanıyorum. Bu sayede, web geliştirme alanındaki gelişmeleri yakından takip ediyor ve en son teknolojileri uygulama fırsatı buluyorum.`,

  `Ayrıca, Laravel'in sağladığı güçlü backend altyapısını da çok iyi bir şekilde kullanabiliyorum. Laravel ile geliştirilmiş birçok projede yer aldım ve bu projelerin ön uç kısımlarını React veya Next.js gibi teknolojilerle entegre ederek, kullanıcı dostu ve performansı yüksek web uygulamaları oluşturdum. Laravel'in sunduğu güçlü yapıya ek olarak, blade şablon motorunu da etkin bir şekilde kullanarak, web uygulamalarının ön yüzünü tasarlayıp geliştirdim.`,

  `Bu süreçte, sadece kod yazmakla kalmayıp, aynı zamanda tasarım ve kullanılabilirlik konularına da önem verdim. Kullanıcı deneyimini en üst düzeye çıkarmak için çeşitli araçlar ve teknikler kullanarak, estetik ve kullanıcı dostu arayüzler oluşturdum. Bu sayede, kullanıcıların web uygulamalarını daha kolay ve keyifli bir şekilde kullanmalarını sağladım.`
]

export const portfolioCards: IPortfolioCards[] = [
  {
    title: "WEBOVA",
    color: "#227093",
    link: "https://github.com/ahmet687u/webova",
    description: `Bootstrap'a hafif bir alternatif olarak tasarladığım, SCSS kullanarak geliştirdiğim bir minik CSS çerçevesi hazırladım. Bu özel çerçeve, belirli projelerim için gereken özellikleri içerir ve kullanılmayan bileşenlerin gereksiz yükünü taşımadan daha optimize edilmiş bir stil oluşturma süreci sunar. Performansı ve kullanım kolaylığını ön planda tutar`
  },
  {
    title: "F1RF1R",
    color: "#218c74",
    link: "https://github.com/ahmet687u/f1rf1r",
    description: `Bu JavaScript kütüphanesi, bildirim mesajlarının ve popup iletişim kutularının oluşturulmasını kolaylaştırır. Kullanımı kolay ve esnek bir yapıya sahiptir, geliştiricilere web uygulamalarındaki bildirimler, onaylar ve diğer etkileşimli öğeleri hızlı bir şekilde uygulama ve özelleştirme imkanı sunar. Kütüphane, minimalist bir yaklaşım benimseyerek performansı ve entegrasyon kolaylığını ön planda tutar, işlevselliği ise asla kaybetmez`
  },
  {
    title: "Datasurgery",
    color: "#2c2c54",
    description: `Bir web demo ürününün ön uç geliştirilmesinde yer aldım. Bu ürün, yapay zeka kullanarak tiroid kanserini tahmin etmeyi amaçlıyor. Görevlerim arasında, doktorların görüntülere çizim yaparak veriyi segmente etmelerini sağlayan bir görüntü işaretleme aracının uygulanması yer alıyordu. Bu araç, işaretlemelerin koordinatlarını yakalayıp bunları arka uca iletiyordu.

    Ayrıca, uzman radyologların hastalarıyla uzaktan danışabilmelerini sağlayan bir mobil uygulama projesinde mobil geliştirici olarak görev aldım. Rollüm, kullanıcı arayüzlerinin uygulanması ve uygulamanın çeşitli cihazlar ve işletim sistemlerindeki işlevselliğinin sağlanmasıydı`
  },
  {
    title: "Lena Optik",
    color: "#b33939",
    link: "https://lenaoptik.com.tr/",
    description: `HTML, CSS, JavaScript ve TypeScript kullanarak geliştirdiğim bu uygulamada, aynı zamanda Laravel Blade templating'i ile çalışarak hem frontend hem de backend dünyasını keşfettim. Kullanıcı deneyimini öncelik edinen bir yaklaşımla, hem görünüm hem de işlevsellik arasında mükemmel bir denge sağladım. Laravel Blade templating'i ile her sayfa ve öğe tutarlı bir tasarımla donatıldı, JavaScript ve TypeScript ile güçlendirildi. Bu projede çalışırken, hem Laravel hem de frontend teknolojileri hakkında yeni bilgiler edinme fırsatı buldum. Hem frontend hem de backend dünyasına aynı anda adım atarak, kendimi sürekli olarak geliştirmeye yönelik çalışmalarım devam etmektedir.`
  }
]


export const experiences = [
  {
    title: ""
  }
]