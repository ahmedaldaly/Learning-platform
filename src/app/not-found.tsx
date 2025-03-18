import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading1}>404</h1>
          <p style={styles.heading2}>Something's missing.</p>
          <p style={styles.paragraph}>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link href="/" style={styles.link}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

// التنسيقات باستخدام CSS عادي
const styles = {
  section: {
    backgroundColor: "#ffffff", // خلفية بيضاء
    color: "#1a1a1a", // لون النص الداكن
  },
  container: {
    padding: "2rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  content: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading1: {
    fontSize: "9rem",
    fontWeight: "800",
    color: "#2563eb", // لون أزرق
    marginBottom: "1rem",
  },
  heading2: {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#1a1a1a", // لون النص الداكن
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.125rem",
    fontWeight: "300",
    color: "#666666", // لون النص الرمادي
    marginBottom: "2rem",
  },
  link: {
    display: "inline-flex",
    backgroundColor: "#2563eb", // لون أزرق
    color: "#ffffff", // لون النص الأبيض
    padding: "0.625rem 1.25rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
};

export default NotFound;