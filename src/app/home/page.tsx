import Head from 'next/head';
import Nav from '../nav';
import Button from './_components/Button';
import styles from './HomePage.module.css'; // Make sure to create this CSS module

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>MagicRecruit.ai - Automate Your Hiring Process</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        {/* Add other meta tags for SEO as needed */}
      </Head>
      <Nav />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Streamline Your Hiring with MagicRecruit.ai
          </h1>
          <p className={styles.description}>
            Automate sourcing, vetting, and scheduling interviews effortlessly.
          </p>
          <Button text="Get Started" />
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2>Our Features</h2>
          <div className={styles.featureList}>
            {/* Feature Items */}
            <div className={styles.featureItem}>
              <h3>Efficient Sourcing</h3>
              <p>Automatically source the best candidates from a wide pool.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Automated Vetting</h3>
              <p>
                Use AI to screen and shortlist the most qualified candidates.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3>Seamless Interview Scheduling</h3>
              <p>Easily schedule interviews with integrated calendar tools.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div className={styles.testimonialList}>
            {/* Testimonial Items */}
            {/* Add your testimonial content here */}
          </div>
        </section>

        {/* Other Sections as Needed */}
      </main>
      {/* Footer */}
      {/* You can import a Footer component here or add the footer code directly */}
    </div>
  );
};

export default HomePage;
