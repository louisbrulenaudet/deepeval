/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'index',
    'install',
    {
      type: 'category',
      label: 'QuickStart',
      items: [
        'quickstart/quickstart',
        'quickstart/dataset',
        'quickstart/custom-metrics',
        'quickstart/synthetic-data-creation'
      ],
    },
    {
      type: 'category',
      label: 'Metrics',
      items: ['metrics/entailment', 'metrics/bertscore']
    },
    {
      type: 'category',
      label: 'Evaluating LLMs',
      items: [
        'measuring_llm_performance/factual_consistency',
        'measuring_llm_performance/answer_relevancy'
      ]
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["tutorials/evaluating-langchain"]
    },
    'contact'
  ],
};

module.exports = sidebars;
