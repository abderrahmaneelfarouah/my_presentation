import { createFileRoute } from '@tanstack/react-router';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const Route = createFileRoute('/confidentialite')({
  component: PrivacyPolicy,
});
