import typescript from 'rollup-plugin-typescript2';

// this is for node, so only outpu CommonJS
const config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/mailgun-node.js',
    format: 'cjs',
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    })
  ]
}

export default config