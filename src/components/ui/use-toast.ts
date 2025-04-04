import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import {
  useEffect,
  useState,
} from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type State = {
  toasts: ToasterToast[]
}

export const useToast = () => {
  const [state, setState] = useState<State>({ toasts: [] })

  function toast({ ...props }: Omit<ToasterToast, "id">) {
    const id = genId()

    setState((state) => {
      if (state.toasts.length >= TOAST_LIMIT) {
        return {
          ...state,
          toasts: [...state.toasts.slice(1), { ...props, id }],
        }
      }
      return {
        ...state,
        toasts: [...state.toasts, { ...props, id }],
      }
    })
  }

  function update(id: string, toast: ToasterToast) {
    if (state.toasts.find((t) => t.id === id)) {
      setState((state) => ({
        ...state,
        toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...toast } : t)),
      }))
    }
  }

  function dismiss(id: string) {
    setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }))
  }

  return {
    toast,
    update,
    dismiss,
    toasts: state.toasts,
  }
}
