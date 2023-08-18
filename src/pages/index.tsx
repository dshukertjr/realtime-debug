import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// const supabaseUrl = 'https://mmwldeliydewdntjiwzr.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1td2xkZWxpeWRld2RudGppd3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODg2ODEsImV4cCI6MTk5ODA2NDY4MX0.J6giZTS1oNcs9JI55m-dG421DI_Zq-W4SIFzzfkZ2K4'

const supabaseUrl = 'https://hlirhxzfwnfmenvivfbg.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsaXJoeHpmd25mbWVudml2ZmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMzcxOTcsImV4cCI6MjAwNzkxMzE5N30.FIxh78cMgGA9O2UGF0j2IRMagB32bQVpTHU15Z4ecqs'

const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      log_level: 'info',
    },
  },
})

function MyApp() {
  const subscribe = async () => {
    supabase
      .channel('name')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public' },
        (payload: any) => {
          console.log(payload)
        }
      )
      .subscribe((status: any, error: any) => {
        console.log(status)
        if (error) console.log(`error occured:`, error)
      })
  }

  return (
    <div>
      <div>
        <button
          className="bg-purple-500 text-white py-1 px-2"
          onClick={subscribe}
        >
          subscribe
        </button>
      </div>
    </div>
  )
}

export default MyApp
