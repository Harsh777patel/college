
const express = require('express');
const app     = express();
const PORT    = 3000;

// 1) Middleware
app.use(express.json());      // parse JSON bodies
app.use((req,res,next)=>{     // simple logger
  console.log(`${req.method} ${req.url}`);
  next();
});

// In‑memory “database”
let items = [
  { id: 1, name: 'Item One', owner: 'Alice' },
  { id: 2, name: 'Item Two', owner: 'Bob' }
];

// 2) GET /items         → read all, optional ?owner= filter
app.get('/items', (req, res) => {
  const { owner } = req.query;
  const result = owner
    ? items.filter(i => i.owner === owner)
    : items;
  res.json(result);
});

// 3) GET /items/:id     → read one by ID
app.get('/items/:id', (req, res) => {
  //console.log(req);
  
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// 4) POST /items        → create new
app.post('/items', (req, res) => {
  const { name, owner } = req.body;
  if (!name || !owner) {
    return res.status(400).json({ error: 'name & owner required' });
  }
  const newItem = { id: Date.now(), name, owner };
  items.push(newItem);
  res.status(201).json(newItem);
});

// 5) PUT /items/:id     → update existing
app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log(req.params);
  
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { name, owner } = req.body;
  items[idx] = {
    ...items[idx],
    ...(name  !== undefined && { name  }),
    ...(owner !== undefined && { owner })
  };
  res.json(items[idx]);
});

// 6) DELETE /items/:id  → delete by ID
app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = items.length;
  items = items.filter(i => i.id !== id);
  if (items.length === before) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendStatus(204);
});

// 404 fallback
app.use((req, res) => res.status(404).send('Endpoint not found'));

app.listen(PORT, () =>
  console.log(`Express API listening on http://localhost:${PORT}`)
);
