import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { json } from 'stream/consumers'

// const supabaseUrl = 'https://nlbsnpoablmsxwkdbmer.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTE5ODEwMiwiZXhwIjoxOTQ0Nzc0MTAyfQ.XZWLzz95pyU9msumQNsZKNBXfyss-g214iTVAwyQLPA'
const supabaseUrl = 'https://sataqkpunfmscdwhtgvi.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdGFxa3B1bmZtc2Nkd2h0Z3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0Njc2MTksImV4cCI6MTk5MjA0MzYxOX0.uzWpSv9Heh57jSPBsspFdItFv6geONzrwsxuNwVzCLQ'

const supabase = createClient(supabaseUrl, supabaseKey)

function MyApp() {
  const some = async () => {
    // const openAiAPIKey = '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'

    const openAiAPIKey = 'My_OPEN_AI_API_KEY'

    const content = 'Text to generate embedding.'
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiAPIKey}`,
      },
      body: JSON.stringify({
        input: content,
        model: 'text-embedding-ada-002',
      }),
    })
    const responseData = await response.json()

    const embedding = responseData.data[0].embedding

    await supabase.from('documents').insert({
      content,
      embedding,
    })

    return

    const { data, error } = await supabase.auth.getUser()
    supabase.from('some').select().or('', { foreignTable: 'aaa' })
    const some = supabase
      .channel('some')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: '*',
        },
        (payload) => {
          const eventType = payload.eventType
          const newRecord = payload.new
          const oldRecord = payload.old
          console.log(payload)
        }
      )
      .subscribe()
  }
  return <button onClick={some}>press</button>
}

export default MyApp
