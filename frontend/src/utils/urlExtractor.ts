const urlExtractor = (api: string, page?: string, fields?: string[] | undefined) => {
  switch (api) {
    case 'content':
      try {
        return `pages/?type=resume.${page}&fields=_,${fields!.join()}`;
      } catch {
        throw new Error('Provide `page` and `fields` parameters to consume `content` api');
      }
    case 'mlresults':
      return api;
    default:
      throw new Error('Provide a valid api endpoint');
  }
};

export default urlExtractor;
