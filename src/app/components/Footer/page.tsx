import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="block md:flex md:justify-between bg-beauty-rose text-white py-2 text-center px-20 border-t">
      <div className="flex items-center gap-4 text-beauty-cream justify-center">
        <IconBrandFacebook stroke={2} />
        <IconBrandInstagram stroke={2} />
        <IconBrandTwitter stroke={2} />
        <IconBrandTiktok stroke={2} />
      </div>

      <div className="mt-4 text-beauty-cream flex items-center justify-center">
        © {new Date().getFullYear()} - Joyce Beauy. Tous droits réservés.
      </div>
    </footer>
  )
}