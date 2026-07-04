
CREATE TYPE public.lead_source AS ENUM ('audit', 'partner', 'contact');

CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  form_source public.lead_source NOT NULL,
  name TEXT,
  company TEXT,
  industry TEXT,
  budget_range TEXT,
  website TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer TEXT,
  landing_page TEXT
);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_form_source_idx ON public.leads (form_source);

GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous website visitors) can submit a lead.
CREATE POLICY "Anyone can insert leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No public SELECT/UPDATE/DELETE policies: reads happen server-side via service_role only.
