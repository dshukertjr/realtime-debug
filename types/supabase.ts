export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      a: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
      another: {
        Row: {
          another_id: string
          id: string
        }
        Insert: {
          another_id?: string
          id?: string
        }
        Update: {
          another_id?: string
          id?: string
        }
      }
      attendees: {
        Row: {
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          user_id?: string
        }
      }
      chats: {
        Row: {
          create_date: string
          id: string
          name: string | null
          title: string | null
          transaction_date: string
          user_id: number | null
        }
        Insert: {
          create_date?: string
          id?: string
          name?: string | null
          title?: string | null
          transaction_date?: string
          user_id?: number | null
        }
        Update: {
          create_date?: string
          id?: string
          name?: string | null
          title?: string | null
          transaction_date?: string
          user_id?: number | null
        }
      }
      events: {
        Row: {
          created_at: string | null
          host: string
          id: number
        }
        Insert: {
          created_at?: string | null
          host: string
          id?: number
        }
        Update: {
          created_at?: string | null
          host?: string
          id?: number
        }
      }
      likes: {
        Row: {
          created_at: string | null
          id: number
          post_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          post_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          post_id?: number
        }
      }
      messages: {
        Row: {
          created_at: string
          id: string
          room_id: string
          text: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          room_id: string
          text: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          room_id?: string
          text?: string
          user_id?: string
        }
      }
      occasions: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
      orders: {
        Row: {
          created_at: string
          id: string
          price: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          price: number
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          price?: number
          user_id?: string
        }
      }
      posts: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
      products: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      random: {
        Row: {
          content: string
          created_at: string | null
          date_type: string | null
          id: number
          int_column: number | null
          is_premium: boolean
          json_column: Json | null
        }
        Insert: {
          content?: string
          created_at?: string | null
          date_type?: string | null
          id?: number
          int_column?: number | null
          is_premium?: boolean
          json_column?: Json | null
        }
        Update: {
          content?: string
          created_at?: string | null
          date_type?: string | null
          id?: number
          int_column?: number | null
          is_premium?: boolean
          json_column?: Json | null
        }
      }
      recipes: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
      recipi_occasion: {
        Row: {
          occasions_id: number
          recipie_id: number
        }
        Insert: {
          occasions_id: number
          recipie_id: number
        }
        Update: {
          occasions_id?: number
          recipie_id?: number
        }
      }
      restaurants: {
        Row: {
          id: string
          location: unknown
          name: string
        }
        Insert: {
          id?: string
          location: unknown
          name: string
        }
        Update: {
          id?: string
          location?: unknown
          name?: string
        }
      }
      rooms: {
        Row: {
          created_at: string
          creator_id: string
          id: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          id?: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          id?: string
        }
      }
      sessions: {
        Row: {
          answers: Json[]
          id: number
          session_id: number
        }
        Insert: {
          answers: Json[]
          id?: number
          session_id: number
        }
        Update: {
          answers?: Json[]
          id?: number
          session_id?: number
        }
      }
      some: {
        Row: {
          created_at: string | null
          decimal: number | null
          id: number
        }
        Insert: {
          created_at?: string | null
          decimal?: number | null
          id?: number
        }
        Update: {
          created_at?: string | null
          decimal?: number | null
          id?: number
        }
      }
      students: {
        Row: {
          class: number | null
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          class?: number | null
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          class?: number | null
          created_at?: string | null
          id?: number
          name?: string | null
        }
      }
      tags: {
        Row: {
          a_id: number | null
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          a_id?: number | null
          created_at?: string | null
          id?: number
          name?: string
        }
        Update: {
          a_id?: number | null
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      test_table: {
        Row: {
          alarms: Json | null
          inserted_at: string
          quotes: Json | null
          updated_at: string
          user_id: string
          wake_up_schedule: Json | null
        }
        Insert: {
          alarms?: Json | null
          inserted_at?: string
          quotes?: Json | null
          updated_at?: string
          user_id: string
          wake_up_schedule?: Json | null
        }
        Update: {
          alarms?: Json | null
          inserted_at?: string
          quotes?: Json | null
          updated_at?: string
          user_id?: string
          wake_up_schedule?: Json | null
        }
      }
      todos: {
        Row: {
          id: number
          inserted_at: string
          is_complete: boolean | null
          task: string | null
          user_id: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id: string
        }
        Update: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id?: string
        }
      }
      two_keys: {
        Row: {
          another_id: number
          id: number
        }
        Insert: {
          another_id: number
          id?: number
        }
        Update: {
          another_id?: number
          id?: number
        }
      }
      user_data: {
        Row: {
          alarms: Json | null
          inserted_at: string
          quotes: Json | null
          updated_at: string
          user_id: string
          wakeUpSchedules: Json | null
        }
        Insert: {
          alarms?: Json | null
          inserted_at?: string
          quotes?: Json | null
          updated_at?: string
          user_id: string
          wakeUpSchedules?: Json | null
        }
        Update: {
          alarms?: Json | null
          inserted_at?: string
          quotes?: Json | null
          updated_at?: string
          user_id?: string
          wakeUpSchedules?: Json | null
        }
      }
      user_room: {
        Row: {
          created_at: string
          room_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          room_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          room_id?: string
          user_id?: string
        }
      }
      users: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
      }
    }
    Views: {
      my_messagess: {
        Row: {
          created_at: string | null
          id: string | null
          room_id: string | null
          text: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          room_id?: string | null
          text?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          room_id?: string | null
          text?: string | null
          user_id?: string | null
        }
      }
      random_view: {
        Row: {
          content: string | null
          created_at: string | null
          id: number | null
          is_premium: boolean | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: number | null
          is_premium?: boolean | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: number | null
          is_premium?: boolean | null
        }
      }
      room_participants: {
        Row: {
          room_id: string | null
          users: string[] | null
        }
      }
      rooms_with_message_count: {
        Row: {
          count: number | null
          id: string | null
        }
      }
      selected_random: {
        Row: {
          created_at: string | null
          id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
        }
      }
    }
    Functions: {
      create_new_room: {
        Args: {
          opponent_uid: string
        }
        Returns: string
      }
      get_user: {
        Args: {
          user_id: string
        }
        Returns: {
          created_at: string
          id: string
          name: string
        }
      }
      get_user_profile: {
        Args: {
          user_id: string
        }
        Returns: {
          created_at: string
          id: string
          name: string
        }[]
      }
      is_room_empty: {
        Args: {
          room_id: string
        }
        Returns: boolean
      }
      liked_posts: {
        Args: {
          category_id: string
        }
        Returns: Record<string, unknown>[]
      }
      nearby_restaurants: {
        Args: {
          lat: number
          long: number
        }
        Returns: Record<string, unknown>[]
      }
      nearby_restaurants_with_distance: {
        Args: {
          lat: number
          long: number
        }
        Returns: Record<string, unknown>[]
      }
      restaurants_in_view: {
        Args: {
          min_lat: number
          min_long: number
          max_lat: number
          max_long: number
        }
        Returns: Record<string, unknown>[]
      }
      user_room_set: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
    }
    Enums: {
      participant_type: "trainer" | "participant"
      user_status: "ONLINE" | "OFFLINE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
