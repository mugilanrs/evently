import Footer from "@/components/shared/Footer";
import {Header} from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col">
            <Header/>
            <main className="flex-1 bg-violet-400">{children}</main>
            <Footer/>
        </div>
    );
  }
  