# SPT Foundation Calculator

Web app that estimates **allowable bearing pressure for shallow footings** and **safe load on circular piles** from Standard Penetration Test (SPT) data — implementing the method of **Khatri, Yadav & Sundriyal (2023)**, *Smart Construction and Sustainable Cities* 1:10, [doi:10.1007/s44268-023-00012-4](https://link.springer.com/article/10.1007/s44268-023-00012-4).

No build step, no dependencies — open `index.html` in any browser, or serve the folder:

```
python -m http.server 8642
```

## Features

- **Shallow footings** — strip, square, rectangular, circular
  - IS 6403–1981 bearing capacity (Meyerhof/Vesic factors, shape/depth/water-table factors, local-shear check)
  - Teng (1962) net safe pressure and settlement pressure q_sp (IS 8009 basis)
- **Piles (circular)** — Broms (1966) skin friction + Berezantsev (1961) tip bearing, FS = 2.5
- **Full SPT correction chain** — energy C_E, borehole C_B, rod length C_R (optional), sampler C_S, overburden C_N, dilatancy N′
- **Visualizations** — soil profile with corrected N′, N-value bar chart, pressure bulb diagram, pile shaft friction diagram, animated results, dark/light theme, print stylesheet

## Verification

`test.cjs` runs the calculation headlessly against the paper's worked examples:

| Case | Paper (app / manual) | This app |
|---|---|---|
| Shallow allowable | 208.1 / 209.63 kPa | ~217 kPa |
| Pile allowable load | 870 / 864 kN | ~851 kN |

Use **"Load paper example"** in the app to reproduce both benchmarks.

> Educational tool. Soil properties come from empirical correlations; results must be checked by a qualified geotechnical engineer before design use.
