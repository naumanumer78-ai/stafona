import Link from "next/link";
import Button from "../../../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center md:p-[3.5em] p-[1.5625em]" style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="max-w-[37.5em] text-center">
        <h1 className="md:headline-01 headline-02 text-white mb-[1em]">
          Product Not Found
        </h1>
        <p className="body-copy-large text-white/70 mb-[2em]">
          The product you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
}

