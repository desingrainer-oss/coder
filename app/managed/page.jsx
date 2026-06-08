import ServicePage from "@/components/ServicePage";
import { managedData } from "@/data/services";

export default function ManagedPage() {
  return <ServicePage data={managedData} />;
}
