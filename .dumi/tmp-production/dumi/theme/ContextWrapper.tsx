// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/zhanbo/happy/x-render/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"root","version":"0.0.1","repository":{"type":"git","url":"git+https://github.com/alibaba/x-render.git","branch":"master","platform":"github"}},
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"footer":" Please feel free to use and contribute to the development.","prefersColor":{"default":"light","switch":true},"name":"XRender","logo":"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png","socialLinks":{"github":"https://github.com/alibaba/x-render"},"nav":{"zh-CN":[{"title":"FormRender","link":"/form-render"},{"title":"TableRender","link":"/table-render"},{"title":"ChartRender","link":"/chart-render"},{"title":"表单设计器","link":"/generator"},{"title":"Playground","link":"/playground"}],"en-US":[{"title":"FormRender","link":"/en/form-render"}]}},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
