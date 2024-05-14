import { IShareButton, TNavbarLinks } from "@/types";

import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact } from "react-icons/fa";


export const navbarLinks: TNavbarLinks[] = [
  {
    route: "/",
    label: "Anasayfa"
  },
  {
    route: "/hakkimda",
    label: "Hakkımda"
  },
  {
    route: "/calismalarim",
    label: "Çalışmalarım"
  },
  {
    route: "/iletisim",
    label: "İletişim"
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