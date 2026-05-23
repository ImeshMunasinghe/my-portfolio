import styles from './SideNav.module.css';

interface Section {
  id: string;
  label: string;
}

interface SideNavProps {
  sections: Section[];
  activeSection: string;
}

function SideNav({ sections, activeSection }: SideNavProps) {
  return (
    <div className={styles.navContainer}>
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`${styles.dot} ${activeSection === section.id ? styles.active : ''}`}
          aria-label={`Scroll to ${section.label}`}
          title={section.label}
        />
      ))}
    </div>
  );
}

export default SideNav;
