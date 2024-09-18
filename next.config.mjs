/**
 * The generics are for autocomplete purposes only. They are not used in the code.
 * 
 * @template {import('next').NextConfig} T 
 * @param {T} config - a generic parameter that flows through to the return type
 * @constraint {{import ('next').NextConfig} T}
**/


function defineNextConfig(config) {
  return config
}

export default defineNextConfig({
  reactStrictMode: true,
  // swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true, } }],
    })
    return config
  },
})
