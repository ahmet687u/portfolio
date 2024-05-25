import type { IShareButton, TNavbarLinks, IPortfolioCards, TLocales, THomeCardWithLocale } from "@/types";

import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, } from "react-icons/fa";
import { TbDeviceMobileCode, TbDeviceDesktopCode } from "react-icons/tb";
import { GiOnTarget } from "react-icons/gi";

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

export const homeCards: THomeCardWithLocale[] = [
  {
    title: { tr: "Mobil Geliştirme", en: "Mobile Development" },
    icon: TbDeviceMobileCode,
    text: {
      tr: "Mobil uygulamalar, insanların yaşamlarını kolaylaştırırken, ben de teknolojinin sınırlarını zorlamaktan keyif alırım. Teknolojinin hızla gelişmesiyle birlikte, mobil geliştirme sürekli olarak yenilenen bir alandır. Yenilikçi fikirlerin ve ileri teknolojilerin benimseyicisi olmak, her zaman heyecan verici bir deneyimdir",
      en: "While mobile applications make people's lives easier, I also enjoy pushing the boundaries of technology. With technology rapidly advancing, mobile development is an ever-evolving field. Being a pioneer in innovative ideas and advanced technologies is always an exciting experience."
    },
  },
  {
    title: { tr: "Web Geliştirme", en: "Web Development" },
    icon: TbDeviceDesktopCode,
    text: {
      tr: "Web geliştirme, benim için bir tutku. Kod yazmak sadece iş değil, aynı zamanda sanat. Her satırda yeni bir problemi çözme heyecanıyla doluyum. Her proje, yaratıcılığımı test etme ve kendimi geliştirme fırsatı sunuyor. Geleceğin dijital dünyasını şekillendirmek için sürekli öğrenmeye ve keşfetmeye hazırım.",
      en: "Web development is a passion for me. Writing code is not just a job, but also an art. I am filled with excitement to solve new problems with every line. Each project offers me an opportunity to test my creativity and improve myself. I am ready to constantly learn and explore to shape the future of the digital world."
    },
  },
  {
    title: { tr: "Piksel Mükemmeliyeti", en: "Pixel Perfect" },
    icon: GiOnTarget,
    text: {
      tr: "Her pikselin önemi, her detayın kusursuzluğu... Front End geliştiricisi olarak, Pixel Perfect'in peşindeyim. Her elementin mükemmel bir uyum içinde olması, her ayrıntının yerinde olması benim için bir tutku. Tasarımı kodla buluştururken, her dokunuşta estetik ve işlevsellik arasında kusursuz bir denge kurmaya çalışıyorum",
      en: "The importance of every pixel, the perfection of every detail... As a Front End developer, I pursue Pixel Perfect. It's a passion for me to ensure every element is in perfect harmony and every detail is in its place. While merging design with code, I strive to strike a flawless balance between aesthetics and functionality with every touch."
    },
  }
]