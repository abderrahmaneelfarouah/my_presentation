interface SkillTagProps {
  skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="tech-badge font-body">
      {skill}
    </span>
  );
}