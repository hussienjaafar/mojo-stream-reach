
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
REVOKE INSERT ON public.leads FROM anon;
REVOKE INSERT ON public.leads FROM authenticated;
