import { navItems } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
export function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h1>logo</h1>
        </div>
        {navItems.map((item, i) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            key={item.label}
          >
            <Link href={item.href}>{item.label}</Link>
          </motion.div>
        ))}
      </div>
    </footer>
  );
}
