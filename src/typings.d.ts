// Allows import of HTML files
declare module "*.html" {
  const content: string
  export default content
}
