import { permanentRedirect } from "next/navigation";

/** Canonical professional home is `/`; keep this URL for old links only. */
export default function ProfessionalLegacyRedirect() {
  permanentRedirect("/");
}
