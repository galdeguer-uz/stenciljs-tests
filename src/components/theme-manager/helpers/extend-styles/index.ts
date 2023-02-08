import COMPONENT_ID from '../../constants';

const extendStyles = (styles: object, nodes: NodeList) => {
  nodes.forEach((eachChild) => {
    if (eachChild['COMPONENT_ID']) {
      const stylesByComponent: string = styles[eachChild['COMPONENT_ID']];

      if (stylesByComponent) {
        eachChild['theme'] = stylesByComponent;

        extendStyles(styles, eachChild.childNodes);
      } else if (eachChild['COMPONENT_ID'] === COMPONENT_ID) {
        let newStyles: object = styles;

        if (eachChild['styles'] && !eachChild['avoidInheritStyles']) {
          const allKeys: Array<string> = Object.keys(eachChild['styles']);
          const distinctKeys: Array<string> = [...new Set(allKeys)];

          newStyles = distinctKeys.reduce((accumulator, currentValue) => ({
            ...accumulator,
            [currentValue]: `${styles[currentValue]}${eachChild['styles'][currentValue]}`,
          }), {});

          eachChild['styles'] = newStyles;
        }
      }
    } else {
      extendStyles(styles, eachChild.childNodes);
    }
  });
};

export default extendStyles;
