// CONFIG STARTS

const _cli = {
  tag: "beta4.0.1",
  date: "Nov 25, 2023",
};

const _gui = {
  tag: "beta4.0.3",
  date: "Nov 25, 2023",
};

const _snapshot = {
  tag: "snap12",
  date: "Nov 25, 2023",
  height: 1649720
}


export const githubFiles = {
  cli: {
    ..._cli,
    url: `https://github.com/ReserveBlockIO/ReserveBlock-Core/releases/latest`,
  },
  gui: {
    ..._gui,
    url: `https://github.com/ReserveBlockIO/rbx-wallet-gui/releases/latest`,
  },
  snapshot: {
    ..._snapshot,
    url: `https://github.com/ReserveBlockIO/ReserveBlockSnapshot/releases/latest`,
  },
};

