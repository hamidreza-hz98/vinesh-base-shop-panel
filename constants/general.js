import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';

export const sidebarRoutes = [
  {
    header: "صفحات اصلی",
    items: [
      {
        id: "dashboard",
        title: "داشبورد",
        icon: DashboardOutlinedIcon,
        href: "/dashboard",
      },
      {
        id: "products",
        title: "محصولات",
        icon: Inventory2OutlinedIcon,
        href: "/dashboard/products",
      },
      {
        id: "categories",
        title: "دسته بندی ها",
        icon: CategoryOutlinedIcon,
        href: "/dashboard/categories",
      },
      {
        id: "customers",
        title: "مشتریان",
        icon: SupervisedUserCircleOutlinedIcon,
        href: "/dashboard/customers",
      },
      {
       id: "orders",
       title: "سفارش ها",
       icon: ShoppingCartCheckoutOutlinedIcon,
       href: "/dashboard/orders",
     },
    ],
  },
  {
    header: "عمومی",
    items: [
      {
        id: "media",
        title: "مدیا",
        icon: PermMediaOutlinedIcon,
        href: "/dashboard/media",
      },
      {
        id: "brands",
        title: "برند ها",
        icon: LayersOutlinedIcon,
        href: "/dashboard/brands",
      },
      {
        id: "contact",
        title: "فرم تماس",
        icon: AttachEmailOutlinedIcon,
        href: "/dashboard/contact",
      },

      
      // {
      //   id: "tags",
      //   title: "Tags",
      //   icon: TagOutlinedIcon,
      //   href: "/dashboard/tags",
      // },
     
    ],
  },
  // {
  //   header: "مالی",
  //   items: [
     
  //     {
  //       id: "transactions",
  //       title: "Transactions",
  //       icon: ReceiptOutlinedIcon,
  //       href: "/dashboard/transactions",
  //     },
  //     {
  //       id: "paymentGateways",
  //       title: "Payment Gateways",
  //       icon: AccountBalanceOutlinedIcon,
  //       href: "/dashboard/payment-gateways",
  //     },
  //     {
  //       id: "carts",
  //       title: "Carts",
  //       icon: ShoppingBasketOutlinedIcon,
  //       href: "/dashboard/carts",
  //     },
  //   ],
  // },
  {
    header: "تنظیمات سایت",
    items: [
      {
        id: "general",
        title: "تنظیمات عمومی",
        icon: SettingsApplicationsOutlinedIcon,
        href: "/dashboard/settings/general",
      },
      {
        id: "seo",
        title: "سئو",
        icon: ScreenSearchDesktopOutlinedIcon,
        href: "/dashboard/settings/seo",
      },
      {
        id: "about",
        title: "درباره ما",
        icon: InfoOutlinedIcon,
        href: "/dashboard/settings/about",
      },
      {
        id: "faq",
        title: "سوالات متداول",
        icon: LiveHelpOutlinedIcon,
        href: "/dashboard/settings/faq",
      },
      {
        id: "terms",
        title: "قوانین و مقررات",
        icon: GavelOutlinedIcon,
        href: "/dashboard/settings/terms",
      },
    ],
  },
];

export default sidebarRoutes;
